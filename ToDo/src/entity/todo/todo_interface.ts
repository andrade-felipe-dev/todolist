import RegisterDateInteract from "../../shared/RegisterDateInteract";

export default interface todo_interface {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  registerDateInteract: RegisterDateInteract;
}
