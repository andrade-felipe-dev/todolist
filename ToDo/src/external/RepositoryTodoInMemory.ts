import Todo from "../entity/todo/todo";
import RepositoryTodoInterface from "../useCases/todo/RepositoryTodoInterface";

export default class RepositoryTodoInMemory implements RepositoryTodoInterface {
  todolist: Todo[] = [];

  create(todo: Todo): Todo {
    this.todolist.push(todo);

    return todo;
  }
  update(todo: Todo): Todo {
    const recoverTodo = this.findById(todo.props.id);

    if (recoverTodo) {
      const newTodo = todo;
      newTodo.props.registerDateInteract.setUpdatedAt();

      this.delete(recoverTodo!);
      this.create(newTodo);

      return newTodo;
    }

    throw new Error("ouve um problema ao realizar o processo do todo");
  }

  delete(todo: Todo): boolean {
    const index = this.todolist.findIndex((t) => t.props.id === todo.props.id);
    if (index !== -1) {
      this.todolist.splice(index, 1);
      return true;
    }

    throw new Error("Todo não encontrado");
  }

  findById(id: number): Todo | null {
    const todo = this.todolist.find((t) => t.props.id === id);

    if (todo) {
      return todo;
    }

    return null;
  }

  listAll(): Todo[] {
    return this.todolist;
  }
}
