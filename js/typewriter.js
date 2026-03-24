/**
 * TypewriterEffect - Zero dependency typewriter animation
 * A lightweight, vanilla JavaScript typewriter effect class
 *
 * Usage: new TypewriterEffect(element, strings, options)
 *
 * @author Subham Paul
 * @license MIT
 */

class TypewriterEffect {
  constructor(element, strings, options = {}) {
    if (!element) {
      throw new Error('TypewriterEffect: element is required');
    }
    if (!strings || !Array.isArray(strings) || strings.length === 0) {
      throw new Error('TypewriterEffect: strings array is required');
    }

    this.element = element;
    this.strings = strings;
    this.options = {
      typeSpeed: options.typeSpeed || 80,
      deleteSpeed: options.deleteSpeed || 40,
      pauseTime: options.pauseTime || 2000,
      loop: options.loop !== undefined ? options.loop : true,
      cursor: options.cursor !== undefined ? options.cursor : true,
      cursorChar: options.cursorChar || '|',
      startDelay: options.startDelay || 500,
      onComplete: options.onComplete || null,
      onStart: options.onStart || null
    };

    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.isPaused = false;
    this.isDestroyed = false;
    this.timeoutId = null;
    this.hasStarted = false;

    // Store original content if needed
    this.originalText = element.textContent;

    // Initialize
    this.init();
  }

  /**
   * Initialize the typewriter
   */
  init() {
    // Clear element content
    this.element.textContent = '';

    // Add cursor if enabled
    if (this.options.cursor) {
      this.cursorElement = document.createElement('span');
      this.cursorElement.className = 'typewriter-cursor';
      this.cursorElement.textContent = this.options.cursorChar;
      this.cursorElement.style.animation = 'typewriter-cursor 1s step-end infinite';
      this.element.appendChild(this.cursorElement);
    }

    // Start after delay
    this.timeoutId = setTimeout(() => {
      if (!this.isDestroyed && !this.isPaused) {
        this.type();
      }
    }, this.options.startDelay);
  }

  /**
   * Core typing logic
   */
  type() {
    if (this.isDestroyed) return;

    const currentString = this.strings[this.currentStringIndex];
    const currentLength = this.isDeleting ?
      currentString.length - this.currentCharIndex :
      this.currentCharIndex;

    // Update display
    this.element.textContent = currentString.substring(0, currentLength);

    // Re-add cursor if enabled
    if (this.options.cursor && this.cursorElement) {
      this.element.appendChild(this.cursorElement);
    }

    // Calculate next action
    if (this.isDeleting) {
      // Continue deleting
      if (this.currentCharIndex > 0) {
        this.currentCharIndex--;
        this.timeoutId = setTimeout(() => this.type(), this.options.deleteSpeed);
      } else {
        // Done deleting, move to next string
        this.isDeleting = false;
        this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
        this.timeoutId = setTimeout(() => this.type(), this.options.typeSpeed);
      }
    } else {
      // Continue typing
      if (this.currentCharIndex < currentString.length) {
        this.currentCharIndex++;
        this.timeoutId = setTimeout(() => this.type(), this.options.typeSpeed);
      } else {
        // Finished typing current string
        this.timeoutId = setTimeout(() => {
          if (!this.isDestroyed && !this.isPaused) {
            this.isDeleting = true;
            this.type();
          }
        }, this.options.pauseTime);
      }
    }
  }

  /**
   * Start the typewriter animation
   */
  start() {
    if (this.isDestroyed) {
      console.warn('TypewriterEffect: Cannot start - already destroyed');
      return this;
    }

    if (this.hasStarted) {
      if (this.isPaused) {
        this.resume();
      }
      return this;
    }

    this.hasStarted = true;
    this.isPaused = false;

    if (this.options.onStart && typeof this.options.onStart === 'function') {
      this.options.onStart(this);
    }

    this.init();
    return this;
  }

  /**
   * Pause the typewriter animation
   */
  pause() {
    if (this.isDestroyed || !this.hasStarted) return this;

    this.isPaused = true;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    // Remove cursor animation when paused
    if (this.cursorElement) {
      this.cursorElement.style.animation = 'none';
    }

    return this;
  }

  /**
   * Resume the typewriter animation
   */
  resume() {
    if (this.isDestroyed || !this.isPaused) return this;

    this.isPaused = false;

    // Restore cursor animation
    if (this.cursorElement) {
      this.cursorElement.style.animation = 'typewriter-cursor 1s step-end infinite';
    }

    this.type();
    return this;
  }

  /**
   * Stop and destroy the typewriter
   * @param {boolean} keepText - If true, keeps the current text in the element
   */
  destroy(keepText = false) {
    this.isDestroyed = true;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    // Remove cursor
    if (this.cursorElement) {
      this.cursorElement.remove();
      this.cursorElement = null;
    }

    // Optionally keep the text
    if (!keepText) {
      this.element.textContent = this.originalText || '';
    }

    return this;
  }

  /**
   * Reset to initial state
   */
  reset() {
    this.destroy(false);
    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.hasStarted = false;
    this.element.textContent = '';

    if (this.options.cursor) {
      this.cursorElement = document.createElement('span');
      this.cursorElement.className = 'typewriter-cursor';
      this.cursorElement.textContent = this.options.cursorChar;
      this.element.appendChild(this.cursorElement);
    }

    return this;
  }

  /**
   * Update strings dynamically
   * @param {Array} newStrings - New array of strings
   */
  updateStrings(newStrings) {
    if (!newStrings || !Array.isArray(newStrings) || newStrings.length === 0) {
      console.warn('TypewriterEffect: strings array must not be empty');
      return this;
    }

    this.strings = newStrings;
    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;

    // Restart
    this.destroy(false);
    if (!this.isPaused) {
      this.type();
    }

    return this;
  }

  /**
   * Get current state
   * @returns {Object} Current state information
   */
  getState() {
    return {
      isDeleting: this.isDeleting,
      currentStringIndex: this.currentStringIndex,
      currentCharIndex: this.currentCharIndex,
      isPaused: this.isPaused,
      isDestroyed: this.isDestroyed,
      hasStarted: this.hasStarted,
      currentString: this.strings[this.currentStringIndex]
    };
  }

  /**
   * Skip to next string immediately
   */
  skip() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.isDeleting = !this.isDeleting;
    this.type();
    return this;
  }
}

// Auto-initialize if data-typewriter attribute found on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-typewriter]');

  elements.forEach((el) => {
    try {
      const strings = JSON.parse(el.dataset.typewriter || '[]');
      if (strings.length > 0) {
        new TypewriterEffect(el, strings).start();
      }
    } catch (e) {
      console.warn('TypewriterEffect: Invalid data-typewriter attribute', e);
    }
  });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TypewriterEffect;
}
