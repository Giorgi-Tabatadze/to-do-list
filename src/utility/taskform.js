import { pubsub } from "./pubsub";
import todoData from "../tododata";
import createObject from "./objectfactory";

const addTaskForm = {
  render: (container) => {
    const form = document.createElement("form");
    form.classList.add("taskform");

    //title
    const titleDiv = document.createElement("div");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("id", "title");
    titleLabel.innerText = "Title: "

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    //description 
    const descriptionDiv = document.createElement("div");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "description");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("id", "description");
    descriptionLabel.innerText = "description: "
    
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    //date 
    const dateDiv = document.createElement("div");

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "date");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "date");
    dateLabel.innerText = "date: "

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    //priority 
    const priorityDiv = document.createElement("div");

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority")
    const priorityLabel = document.createElement("label")
    priorityLabel.setAttribute("id", "priority")

    const lowPriorityOption = document.createElement("option");
    const mediumPriorityOption = document.createElement("option");
    const highPriorityOption = document.createElement("option");

    lowPriorityOption.setAttribute("value", "low");
    mediumPriorityOption.setAttribute("value", "medium");
    highPriorityOption.setAttribute("value", "high");

    lowPriorityOption.innerText = "Low"
    mediumPriorityOption.innerText = "Medium"
    highPriorityOption.innerText = "High"

    prioritySelect.appendChild(lowPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(highPriorityOption);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    //submit

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";


    //append to form
    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(submitBtn);


    function handleForm(event) { 
      event.preventDefault(); 
      const title = titleInput.value;
      const description = descriptionInput.value;
      const date = dateInput.value;
      const priority = prioritySelect.value;

      pubsub.publish("formUsed", form)
      const todo = createObject.todo(title, description, date, priority);
      todoData.addTodo(todo);

    };
    form.addEventListener('submit', handleForm);
    
    container.appendChild(form);
  }
}

export default addTaskForm;