import { pubsub } from "./pubsub";
import removeAllChildNodes from "./removeallchildnodes";

const mainList = {
  parent: null,

  renderContainer: (container) => {    
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", "list-container");

    container.appendChild(listContainer);
    mainList.parent = listContainer;

    pubsub.subscribe("todoAdded", mainList.renderList);
  },

  renderList: (list) => {
    removeAllChildNodes(mainList.parent);

    const listUl = document.createElement("ul");
    mainList.parent.appendChild(listUl);

    list.forEach(todo => {
      const todoLi = document.createElement("li");
      todoLi.classList.add("todo")

      const check = document.createElement("input");
      check.classList.add("todo-check")
      check.setAttribute("type", "checkbox");
      check.checked = todo.completed;
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


      listUl.appendChild(todoLi);
    });

  }

}

export default mainList;