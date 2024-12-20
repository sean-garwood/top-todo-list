import TodoList from "../src/scripts/components/todo/classes/todo-list";
import TodoItem from "../src/scripts/components/todo/classes/todo-item";

describe("TodoList", () => {
  it("should add a todo", () => {
    const todoList = new TodoList();
    const todoItem = new TodoItem("Buy milk");

    todoList.add(todoItem);

    expect(todoList.todos).toContain(todoItem);
  });

  it("should trim the todo title", () => {
    const todoList = new TodoList();
    const todo = new TodoItem("  Buy milk  ");

    todoList.add(todo);

    expect(todoList.todos[0].title).toBe("Buy milk");
  });
});
