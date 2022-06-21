import { pubsub } from "./utility/pubsub";

const todoData = {
  list: [],
  projects: ["All", ],
  currentProjectIndex: 0, 

  addTodo: (toDo) => {
    toDo.project = todoData.projects[todoData.currentProjectIndex];
    todoData.list.push(toDo);
    todoData.filterList();
  },

  getTodo: () => {
    return list;
  },

  checkUncheck: (info) => {
    console.log(todoData.list[info[0]])
    todoData.list[info.index].completed = info.value;
    todoData.filterList();
  },

  editTodo: (info) => {
    todoData[info.index] = info.todoObj;
    todoData.filterList();
  },

  addProject: (project) => {
    console.log(project);
    todoData.projects.push(project);
    pubsub.publish("projectAdded", todoData.projects);
  },

  setCurrentProject: (index) => {
    todoData.currentProjectIndex = index;
    todoData.filterList();
  },

  filterList: () => {
    let listToSend = [];
    if (todoData.currentProjectIndex === 0) {
      pubsub.publish("todoListEdited", todoData.list);
    }
    else {
    todoData.list.forEach(todo => {
      if (todo.project = todoData.projects[todoData.currentProjectIndex]) {
        listToSend.push(todo);
      }
    });
    pubsub.publish("todoListEdited", listToSend);
   }
  }

};

pubsub.subscribe("checkChanged", todoData.checkUncheck);
pubsub.subscribe("todoEditRequested", todoData.editTodo);
pubsub.subscribe("projectAddRequested", todoData.addProject);

export default todoData;