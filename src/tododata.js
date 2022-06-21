import { pubsub } from "./utility/pubsub";
import {format, startOfWeek, endOfWeek} from 'date-fns';


const todoData = {
  list: [],
  projects: ["Today", "This Week"],
  currentProjectIndex: 0, 

  addTodo: (toDo) => {
    toDo.project = todoData.projects[todoData.currentProjectIndex];
    toDo.id = Date.now()
    todoData.list.push(toDo);
    todoData.filterList();
  },

  deleteTodo: (id) => {
    todoData.list.forEach(todo => {
      if (todo.id = id) {
        const itemToDelete = todo;
        todoData.list.splice(todoData.list.indexOf(todo))
        todoData.filterList();
      };
    });
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
    todoData.setCurrentProject(todoData.projects.indexOf(project));
  },
  

  setCurrentProject: (index) => {
    todoData.currentProjectIndex = parseInt(index);
    console.log(todoData.currentProjectIndex)
    console.log(todoData.currentProjectIndex);
    const projectData = {
      selectedIndex : todoData.currentProjectIndex,
      projects : todoData.projects
    }
    pubsub.publish("projectAdded", projectData);
    todoData.filterList();
  },

  filterList: () => {
    let listToSend = [];

    if (todoData.currentProjectIndex === 0) {
      const today = format(new Date(), 'yyyy-MM-dd')
      console.log(typeof today)
      todoData.list.forEach(todo => {
        if (todo.date === today) {
          listToSend.push(todo);
        }
      });
    }
    else if (todoData.currentProjectIndex === 1){
      const startOfThisWeek = format(startOfWeek(new Date(), {weekStartsOn: 1}), 'yyyy-MM-dd')
      const endOfThisWeek = format(endOfWeek(new Date(), {weekStartsOn: 1}), 'yyyy-MM-dd')
      todoData.list.forEach(todo => {
        if (todo.date >= startOfThisWeek && todo.date <= endOfThisWeek) {
          listToSend.push(todo);
        }
        });
    }
    else if (todoData.currentProjectIndex === 2) {
      listToSend = todoData.list;
      console.log(listToSend)
    }
    else {
    todoData.list.forEach(todo => {
      if (todo.project === todoData.projects[todoData.currentProjectIndex]) {
        listToSend.push(todo);
      }
    });
   }
   pubsub.publish("todoListEdited", listToSend);
  }

};


pubsub.subscribe("checkChanged", todoData.checkUncheck);
pubsub.subscribe("todoEditRequested", todoData.editTodo);
pubsub.subscribe("projectAddRequested", todoData.addProject);
pubsub.subscribe("projectChangeInitiated", todoData.setCurrentProject)
pubsub.subscribe("todoDeleteRequested", todoData.deleteTodo)

export default todoData;