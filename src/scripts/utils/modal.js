export default class Modal {
  constructor(content) {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        ${content}
      </div>
    `;
    document.body.appendChild(this.modal);

    this.modal.querySelector('.close-button').addEventListener('click', () => {
      this.close();
    });

    window.addEventListener('click', (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });
  }

  open() {
    this.modal.style.display = 'block';
  }

  close() {
    this.modal.style.display = 'none';
    this.modal.remove();
  }
}
