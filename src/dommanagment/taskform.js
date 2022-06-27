import { pubsub } from "../utility/pubsub";
import todoData from "../tododata";
import createObject from "../utility/objectfactory";

const addTaskForm = {
  render: (container, prefilledInfo) => {
    const form = document.createElement("form");
    form.classList.add("taskform");

    // title
    const titleDiv = document.createElement("div");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.required = true;

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("id", "title");
    titleLabel.innerText = "Title: ";

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    // description
    const descriptionDiv = document.createElement("div");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "description");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("id", "description");
    descriptionLabel.innerText = "Description: ";

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    // date
    const dateDiv = document.createElement("div");

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "date");
    dateInput.required = true;

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "date");
    dateLabel.innerText = "Date: ";

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    // priority
    const priorityDiv = document.createElement("div");

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("id", "priority");
    priorityLabel.innerText = "Priority: ";

    const lowPriorityOption = document.createElement("option");
    const mediumPriorityOption = document.createElement("option");
    const highPriorityOption = document.createElement("option");

    lowPriorityOption.setAttribute("value", "low");
    mediumPriorityOption.setAttribute("value", "medium");
    highPriorityOption.setAttribute("value", "high");

    lowPriorityOption.innerText = "Low";
    mediumPriorityOption.innerText = "Medium";
    highPriorityOption.innerText = "High";

    prioritySelect.appendChild(lowPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(highPriorityOption);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    // submit

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit");
    submitBtn.innerText = "OK";

    // cancel
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel");
    cancelBtn.setAttribute("type", "button");
    cancelBtn.innerText = "X";
    cancelBtn.addEventListener("click", handleCancel);

    // append to form
    form.appendChild(cancelBtn);
    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(submitBtn);

    function handleSubmit(event) {
      if (titleInput.value === "" || dateInput === "") {
        return;
      }
      event.preventDefault();
      pubsub.publish("formUsed", form);

      const title = titleInput.value;
      const description = descriptionInput.value;
      const date = dateInput.value;
      const priority = prioritySelect.value;

      const todo = createObject.todo(title, description, date, priority);
      todoData.addTodo(todo);
    }

    function handleEdit(event) {
      if (titleInput.value === "" || dateInput === "") {
        return;
      }
      event.preventDefault();
      pubsub.publish("formUsed", form);
      console.log(prefilledInfo);

      prefilledInfo.todoObj.title = titleInput.value;
      prefilledInfo.todoObj.description = descriptionInput.value;
      prefilledInfo.todoObj.date = dateInput.value;
      prefilledInfo.todoObj.priority = prioritySelect.value;

      pubsub.publish("todoEditRequested", prefilledInfo);
    }

    function handleCancel() {
      pubsub.publish("formUsed", form);
    }

    if (prefilledInfo) {
      titleInput.value = prefilledInfo.todoObj.title;
      descriptionInput.value = prefilledInfo.todoObj.description;
      dateInput.value = prefilledInfo.todoObj.date;
      prioritySelect.value = prefilledInfo.todoObj.priority;

      form.addEventListener("submit", handleEdit);
    } else {
      form.addEventListener("submit", handleSubmit);
    }

    container.appendChild(form);
    pubsub.publish("popUpOpened");
  },
};

export default addTaskForm;
