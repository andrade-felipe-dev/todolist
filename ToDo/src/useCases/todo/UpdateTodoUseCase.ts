import Todo from "../../entity/todo/todo";
import UseCaseInterface from "../../shared/UseCaseInterface";
import RepositoryTodoInterface from "./RepositoryTodoInterface";

export default class UpdatedUseCase implements UseCaseInterface<Todo, Todo> {
  private repository: RepositoryTodoInterface;

  constructor(repository: RepositoryTodoInterface) {
    this.repository = repository;
  }

  async execute(e: Todo): Promise<Todo> {
    return this.repository.update(e);
  }
}
