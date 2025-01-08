const createTodoElement = (tag, className, innerHTML) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerHTML = innerHTML;
  return element;
};

export default createTodoElement;
