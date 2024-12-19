import TodoList from "../src/scripts/components/todo-list";
import TodoItem from "../src/scripts/components/todo-item";

describe("TodoList", () => {
  it("should add a todo", () => {
    const todoList = new TodoList();
    const todoItem = new TodoItem("title", "description", "12/31/2025", "notes");

    todoList.add(todoItem);

    expect(todoList.todos).toContain(todoItem);
  });

  it("should remove a todo", () => {
    const todoList = new TodoList();
    const todoItem = new TodoItem("title", "description", "12/31/2025", "notes");

    todoList.add(todoItem);
    todoList.remove(todoItem);

    expect(todoList.todos).not.toContain(todoItem);
  });

  it("should not remove a todo if it does not exist", () => {
    const todoList = new TodoList();
    const todoItem = new TodoItem("title", "description", "12/31/2025", "notes");

    todoList.add(todoItem);
    todoList.remove(new TodoItem("title", "description", "12/30/2025", "notes"));

    expect(todoList.todos).toContain(todoItem);
  });
});
