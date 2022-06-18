import removeAllChildNodes from "../utility/removeallchildnodes";
import { pubsub } from "../utility/pubsub";
import addTaskForm from "./taskform";

const topUi = {
  //cache container
  parent : null,
  formGenerated: false,

  render: (container) => {
    topUi.parent = container;

    const addTaskBtn = document.createElement("button");
    addTaskBtn.innerText = "+ Add Task"
    container.appendChild(addTaskBtn);
    

    addTaskBtn.addEventListener("click", topUi.addForm);

    pubsub.subscribe("formUsed", topUi.removeForm);
  },

  addForm: (prefilled) => {
  if (!topUi.formGenerated) {
    console.log(prefilled);
    if (prefilled.type !== "click"){
    addTaskForm.render(topUi.parent, prefilled);
    }
    else{
    addTaskForm.render(topUi.parent, false);
    };
    topUi.formGenerated = true;
   }
  },

  removeForm: (form) => {
    topUi.parent.removeChild(form);
    topUi.formGenerated = false;
  },

  test: (text) => {
    text.forEach(element => {
      console.log(element)
    });
  }

}

export default topUi