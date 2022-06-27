import { format, startOfWeek, endOfWeek } from "date-fns";
import { pubsub } from "./utility/pubsub";

const todoData = {
  list: [],
  projects: ["Today", "This Week", "All"],
  currentProjectIndex: 2,

  addTodo: (toDo) => {
    toDo.project = todoData.projects[todoData.currentProjectIndex];
    toDo.id = Date.now();
    todoData.list.push(toDo);
    todoData.filterList();
  },

  deleteTodo: (id) => {
    todoData.list.forEach((todo) => {
      if ((todo.id = id)) {
        const itemToDelete = todo;
        todoData.list.splice(todoData.list.indexOf(todo), 1);
        todoData.filterList();
      }
    });
  },

  checkUncheck: (info) => {
    todoData.list.forEach((todo) => {
      console.log(todo);
      console.log(info);
      if (todo.id == info.index) {
        todo.completed = info.value;
      }
    });
    todoData.filterList();
  },

  editTodo: (info) => {
    todoData.list.forEach((todo) => {
      console.log(todo);
      console.log(info);
      if (todo.id == info.todoObj.index) {
        todo = info.todoObj;
      }
    });
    todoData.filterList();
  },

  addProject: (project) => {
    if (todoData.projects.includes(project)) {
      alert("Project with that name Already exists");
      return;
    }
    console.log(project);
    todoData.projects.push(project);
    todoData.setCurrentProject(todoData.projects.indexOf(project));
  },

  deleteProject: () => {
    todoData.projects.splice(todoData.currentProjectIndex, 1);
    todoData.setCurrentProject(2);
  },

  setCurrentProject: (index) => {
    todoData.currentProjectIndex = parseInt(index);
    console.log(todoData.currentProjectIndex);
    console.log(todoData.currentProjectIndex);
    const projectData = {
      selectedIndex: todoData.currentProjectIndex,
      projects: todoData.projects,
    };
    pubsub.publish("projectAdded", projectData);
    todoData.filterList();
  },

  filterList: () => {
    let listToSend = [];

    if (todoData.currentProjectIndex === 0) {
      const today = format(new Date(), "yyyy-MM-dd");
      console.log(typeof today);
      todoData.list.forEach((todo) => {
        if (todo.date === today) {
          listToSend.push(todo);
        }
      });
    } else if (todoData.currentProjectIndex === 1) {
      const startOfThisWeek = format(
        startOfWeek(new Date(), { weekStartsOn: 1 }),
        "yyyy-MM-dd"
      );
      const endOfThisWeek = format(
        endOfWeek(new Date(), { weekStartsOn: 1 }),
        "yyyy-MM-dd"
      );
      todoData.list.forEach((todo) => {
        if (todo.date >= startOfThisWeek && todo.date <= endOfThisWeek) {
          listToSend.push(todo);
        }
      });
    } else if (todoData.currentProjectIndex === 2) {
      listToSend = todoData.list;
      console.log(listToSend);
    } else {
      todoData.list.forEach((todo) => {
        if (todo.project === todoData.projects[todoData.currentProjectIndex]) {
          listToSend.push(todo);
        }
      });
    }
    const dataToSend = {
      list: listToSend,
      currentProjectIndex: todoData.currentProjectIndex,
    };

    pubsub.publish("todoListEdited", dataToSend);
  },

  getLocalStorage: () => {
    if (
      localStorage.getItem("projectsStorage") &&
      localStorage.getItem("todoListStorage")
    ) {
      const projectStorage = JSON.parse(
        localStorage.getItem("projectsStorage")
      );
      const todoListStorage = JSON.parse(
        localStorage.getItem("todoListStorage")
      );
      todoData.list = todoListStorage;
      todoData.projects = projectStorage;
      todoData.setCurrentProject(2);
      todoData.filterList();
    } else {
      todoData.updateStorage();
      todoData.setCurrentProject(2);
      todoData.filterList();
    }
  },

  updateStorage: () => {
    localStorage.setItem("projectsStorage", JSON.stringify(todoData.projects));
    localStorage.setItem("todoListStorage", JSON.stringify(todoData.list));
  },
};

pubsub.subscribe("checkChanged", todoData.checkUncheck);
pubsub.subscribe("todoEditRequested", todoData.editTodo);
pubsub.subscribe("projectAddRequested", todoData.addProject);
pubsub.subscribe("projectChangeInitiated", todoData.setCurrentProject);
pubsub.subscribe("todoDeleteRequested", todoData.deleteTodo);
pubsub.subscribe("projectAdded", todoData.updateStorage);
pubsub.subscribe("todoListEdited", todoData.updateStorage);
pubsub.subscribe("pageLoaded", todoData.getLocalStorage);
pubsub.subscribe("projectDeleteRequested", todoData.deleteProject);

export default todoData;
