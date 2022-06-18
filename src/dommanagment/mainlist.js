import { pubsub } from "../utility/pubsub";
import removeAllChildNodes from "../utility/removeallchildnodes";
import todoData from "../tododata";
import addTaskForm from "./taskform";
import topUi from "./ui";

const mainList = {
  parent: null,

  renderContainer: (container) => {    
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", "list-container");

    container.appendChild(listContainer);
    mainList.parent = listContainer;

    pubsub.subscribe("todoAdded", mainList.renderList);
    pubsub.subscribe("todoEdited", mainList.renderList);
  },

  renderList: (list) => {
    removeAllChildNodes(mainList.parent);

    const listUl = document.createElement("ul");
    mainList.parent.appendChild(listUl);

    

    list.forEach(todo => {

      const handleEdit = (e) => {
        console.log(todo);
        const todoInfo = {
          index: list.indexOf(todo),
          todoObj: todo
        }
        topUi.addForm(todoInfo);
      };

      const todoLi = document.createElement("li");
      todoLi.classList.add("todo")
      todoLi.dataset.index = list.indexOf(todo);
      if (todo.completed) {
        console.log("completed")
        todoLi.classList.add("todo-completed")
      };

      const check = document.createElement("input");
      check.classList.add("todo-check")
      check.setAttribute("type", "checkbox");
      check.checked = todo.completed;
      check.addEventListener("change", mainList.handleCheck);
      todoLi.appendChild(check)

      const title = document.createElement("p");
      title.classList.add("todo-title");
      title.innerText = todo.title;
      todoLi.appendChild(title)

      const priority = document.createElement("p");
      priority.classList.add("todo-priority");
      priority.innerText = `Priority: ${todo.priority}`
      todoLi.appendChild(priority);

      const detailsBtn = document.createElement("button");
      detailsBtn.classList.add("todo-details");
      detailsBtn.innerText = "Details";
      todoLi.appendChild(detailsBtn);

      const date = document.createElement("p");
      date.classList.add("todo-date");
      date.innerText = todo.date;
      todoLi.appendChild(date);

      const editBtn = document.createElement("button")
      editBtn.classList.add("todo-edit");
      editBtn.innerText = "Edit";
      todoLi.appendChild(editBtn);
      editBtn.addEventListener("click", handleEdit)


      listUl.appendChild(todoLi);

    });
  },

  handleCheck: (e) => {
    console.log("received")
    const info = {
      index : e.target.parentNode.dataset.index,
      value: e.target.checked,
    }

    pubsub.publish("checkChanged", info)
  },

}

export default mainList;