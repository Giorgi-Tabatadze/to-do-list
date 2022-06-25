import { pubsub } from "../utility/pubsub";
import removeAllChildNodes from "../utility/removeallchildnodes";
import topUi from "./ui";


const mainList = {
  parent: null,
  detailsRendered: false,

  renderContainer: (container) => {    
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", "list-container");

    container.appendChild(listContainer);
    mainList.parent = listContainer;

    pubsub.subscribe("todoListEdited", mainList.renderList);
    pubsub.subscribe("todoListEdited", mainList.removeDetails);
  },

  renderList: (data) => {
    removeAllChildNodes(mainList.parent);

    const list = data.list;
    const currentProjectIndex = data.currentProjectIndex;

    const listUl = document.createElement("ul");
    mainList.parent.appendChild(listUl);

    if (list.length === 0){
      
      const emptyMessage = document.createElement("div");
      emptyMessage.classList.add("empty-message")
      const text = document.createElement("p");
      text.innerText = "No Todos to Display"
      emptyMessage.appendChild(text);
    
      if(currentProjectIndex > 2){
      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.innerText = "Delete This Project";
      deleteProjectBtn.addEventListener("click", () => {
        pubsub.publish("projectDeleteRequested");
      })

      emptyMessage.appendChild(deleteProjectBtn);
      }
      mainList.parent.appendChild(emptyMessage);
    }

    list.forEach(todo => {

      const handleEdit = (e) => {
        console.log(todo);
        const todoInfo = {
          index: todo.id,
          todoObj: todo
        }
        topUi.addForm(todoInfo);
      };

      const handleDetails = (e) =>{
        mainList.renderDetails(todo);
      }

      const todoLi = document.createElement("li");
      todoLi.classList.add("todo")
      todoLi.dataset.index = todo.id;
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
      detailsBtn.addEventListener("click", handleDetails);

      const date = document.createElement("p");
      date.classList.add("todo-date");
      date.innerText = todo.date;

      todoLi.appendChild(date);

      const editBtn = document.createElement("button")
      editBtn.classList.add("todo-edit");
      editBtn.innerText = "Edit";
      todoLi.appendChild(editBtn);
      editBtn.addEventListener("click", handleEdit)

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("todo-delete");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        pubsub.publish("todoDeleteRequested", todoLi.dataset.index)
      })
      todoLi.appendChild(deleteBtn); 

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

  renderDetails: (todo) => {
    if (!mainList.detailsRendered){
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container")
    if (todo.completed){
      detailsContainer.classList.add("completed")
    };

    const completed = document.createElement("p");


    if (todo.completed) {
      completed.innerText = "Completed"
    }
    else {
      completed.innerText = "Not Completed"
    }
    detailsContainer.appendChild(completed)

    const title = document.createElement("p");
    title.classList.add("details-title");
    title.innerText = `Title: ${todo.title}`;
    detailsContainer.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("details-text");
    description.innerText = `Description: ${todo.description}`;
    detailsContainer.appendChild(description);

    const priority = document.createElement("p");
    priority.classList.add("details-priority"); 
    priority.innerText = `Priority: ${todo.priority}`
    detailsContainer.appendChild(priority);

    const date = document.createElement("p");
    date.classList.add("details-date");
    date.innerText = `Date: ${todo.date}`;
    detailsContainer.appendChild(date);

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "X";
    cancelBtn.addEventListener("click", () => {
      mainList.removeDetails(detailsContainer);
      console.log("Details removed");
    })
    detailsContainer.appendChild(cancelBtn)
    

    mainList.parent.appendChild(detailsContainer);

    mainList.detailsRendered = true;
  }
  },

  removeDetails: (data) =>{
    const details = data.list;

    if (Array.isArray(details)){
      mainList.detailsRendered = false;
      return
    };
    mainList.parent.removeChild(details);
    mainList.detailsRendered = false;
  }

}

export default mainList;