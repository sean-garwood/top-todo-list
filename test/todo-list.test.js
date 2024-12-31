import { mockTodoItem1, mockTodoItem2 } from "./__mocks__/todo-item-mock";
import { mockEmptyTodoList, mockTodoListWithItems }
  from "./__mocks__/todo-list-mock";

describe("TodoList", () => {
  it("should add a todo", () => {
    const todoList = mockEmptyTodoList;
    const todoItem = mockTodoItem1

    todoList.add(todoItem);

    expect(todoList.todos).toContain(todoItem);
  });

  it("should remove a todo", () => {
    const todoList = mockEmptyTodoList;
    const todoItem = mockTodoItem1

    todoList.add(todoItem);
    todoList.remove(todoItem);

    expect(todoList.todos).not.toContain(todoItem);
  });

  it("should not remove a todo if it does not exist", () => {
    const todoList = mockEmptyTodoList;
    const todoItem = mockTodoItem1;

    todoList.add(todoItem);
    todoList.remove(mockTodoItem2);

    expect(todoList.todos).toContain(todoItem);
  });

  it("should take a list of todos", () => {
    const todoList = mockTodoListWithItems;

    expect(todoList.todos.length).toBe(2);
  });
});
