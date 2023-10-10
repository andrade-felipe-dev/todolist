import todo_interface from "./todo_interface";

export default class Todo {
  props: todo_interface;

  constructor(props: todo_interface) {
    this.props = props;
  }

  markAsCompleted() {
    this.props.completed = true;
    this.props.registerDateInteract.setUpdatedAt();
  }
}
