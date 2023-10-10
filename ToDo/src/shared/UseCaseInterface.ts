export default interface UseCaseInterface<E, O> {
  execute(e: E): Promise<O>;
}
