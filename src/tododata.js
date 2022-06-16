import { pubsub } from "./utility/pubsub";

const todoData = {
  list: [],
  projects: [],

  addTodo: (toDo) => {
    todoData.list.push(toDo);
    pubsub.publish("todoAdded", todoData.list);
  },

  getTodo: () => {
    return list;
  }
};

export default todoData;