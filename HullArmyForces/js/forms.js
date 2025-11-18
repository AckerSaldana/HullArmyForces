/**
 * Forms Module
 * Handles form validation and submission
 */

/**
 * Newsletter Form Handler
 */
export class NewsletterForm {
  constructor() {
    this.form = document.querySelector('.newsletter-form');
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const input = this.form.querySelector('.newsletter-form__input');
    const email = input.value;

    if (this.validateEmail(email)) {
      // In a real application, you would send this to a server
      console.log('Newsletter signup:', email);

      // Show success message
      this.showMessage('Thank you for subscribing!', 'success');

      // Clear input
      input.value = '';
    } else {
      this.showMessage('Please enter a valid email address.', 'error');
    }
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  showMessage(message, type) {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 1rem 1.5rem;
      background-color: ${type === 'success' ? '#5a7a5a' : '#c94961'};
      color: white;
      border-radius: 4px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      animation: slideIn 0.3s ease;
      font-family: var(--font-heading);
      font-weight: 600;
    `;

    // Add to body
    document.body.appendChild(messageEl);

    // Remove after 3 seconds
    setTimeout(() => {
      messageEl.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => messageEl.remove(), 300);
    }, 3000);
  }
}
