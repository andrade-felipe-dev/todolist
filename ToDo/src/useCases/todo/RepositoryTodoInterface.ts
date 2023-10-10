import Todo from "../../entity/todo/todo";

export default interface RepositoryTodoInterface {
  create(todo: Todo): Todo;
  update(todo: Todo): Todo;
  delete(todo: Todo): boolean;
  findById(id: number): Todo | null;
  listAll(): Todo[];
}
