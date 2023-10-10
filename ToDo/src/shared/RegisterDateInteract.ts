export default class RegisterDateInteract {
  readonly createdAt: Date;
  updatedAt: Date;

  constructor(createdAt: Date, updatedAt: Date) {
    if (!createdAt) {
      throw new Error("a data de criação é obrigatória.");
    }

    if (updatedAt && !this.validatedProps(createdAt, updatedAt)) {
      throw new Error(
        "a data da criação não pode ser maior que a data de atualização"
      );
    }

    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  setUpdatedAt(updatedAt: Date = new Date()): void {
    this.updatedAt = updatedAt;
  }

  validatedProps(createdAt: Date, updatedAt: Date): boolean {
    if (createdAt > updatedAt) {
      return false;
    }

    return true;
  }
}
