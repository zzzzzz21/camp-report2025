export default class Dialog {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.root = element;
    this.dialog = this.root.querySelector('.js-dialog-content');
    this.openButton = this.root.querySelector('.js-dialog-open');
    this.closeButton = this.dialog.querySelector('.js-dialog-close');
    this.init();
  }

  // 初期設定
  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.openButton.addEventListener('click', () => this.openDialog());
    this.closeButton.addEventListener('click', () => this.closeDialog());
  }

  openDialog() {
    this.dialog.showModal();
    document.body.style.overflow = 'hidden'; // スクロールを無効にする
  }

  closeDialog() {
    this.dialog.close();
    document.body.style.overflow = '';
  }
}
