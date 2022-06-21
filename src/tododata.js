import { pubsub } from "./utility/pubsub";

const todoData = {
  list: [],
  projects: ["All", ],
  currentProjectIndex: 0, 

  addTodo: (toDo) => {
    toDo.project = todoData.projects[todoData.currentProjectIndex];
    toDo.id = todoData.list.length + 1;
    todoData.list.push(toDo);
    todoData.filterList();
  },

  getTodo: () => {
    return list;
  },

  checkUncheck: (info) => {
    todoData.list.forEach(todo => {
      console.log(todo);
      console.log(info);
      if (todo.id == info.index) {
        todo.completed = info.value;
      }
    });
    todoData.filterList();
  },

  editTodo: (info) => {
    todoData.list.forEach(todo => {
      console.log(todo);
      console.log(info);
      if (todo.id == info.todoObj.index) {
        todo = nfo.todoObj;
      }
    });
    todoData.filterList();
  },

  addProject: (project) => {
    console.log(project);
    todoData.projects.push(project);
    pubsub.publish("projectAdded", todoData.projects);
  },

  setCurrentProject: (index) => {
    todoData.currentProjectIndex = index;
    console.log(todoData.currentProjectIndex)
    todoData.filterList();
  },

  filterList: () => {
    if (todoData.currentProjectIndex == 0) {
      pubsub.publish("todoListEdited", todoData.list);
    }
    else {
    let listToSend = [];
    todoData.list.forEach(todo => {
      if (todo.project === todoData.projects[todoData.currentProjectIndex]) {
        console.log(todo);
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
pubsub.subscribe("projectChangeInitiated", todoData.setCurrentProject)

export default todoData;