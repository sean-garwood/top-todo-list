export default class TodoItemTitle {
  constructor(title) {
    this.title = #validFormattedTitle(title);
  }

  render() {
    const title = document.createElement('h2');
    title.textContent = this.title;
    return title;
  }

  #validFormattedTitle(title) {

  }
}
