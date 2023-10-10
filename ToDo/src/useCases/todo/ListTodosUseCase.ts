import Todo from "../../entity/todo/todo";
import UseCaseInterface from "../../shared/UseCaseInterface";
import RepositoryTodoInterface from "./RepositoryTodoInterface";

class ListTodosUseCase implements UseCaseInterface<void, Todo[]> {
  private repository: RepositoryTodoInterface;

  constructor(repository: RepositoryTodoInterface) {
    this.repository = repository;
  }

  async execute(): Promise<Todo[]> {
    return this.repository.listAll();
  }
}
