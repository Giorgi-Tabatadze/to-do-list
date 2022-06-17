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
  },

  checkUncheck: (info) => {
    console.log(todoData.list[info[0]])
    todoData.list[info.index].completed = info.value;
    pubsub.publish("todoEdited", todoData.list);
  }
};

pubsub.subscribe("checkChanged", todoData.checkUncheck);


export default todoData;