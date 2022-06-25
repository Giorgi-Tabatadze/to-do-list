import { pubsub } from "../utility/pubsub";
import todoData from "../tododata";
import removeAllChildNodes from "../utility/removeallchildnodes";

const sidebar = {
  parent : null,
  projectsParent: null,
  formGenerated: false,

  render: (container) => {
    sidebar.parent = container;
    sidebar.projectsParent = document.createElement("div");
    container.appendChild(sidebar.projectsParent)
    pubsub.subscribe("projectAdded", sidebar.renderProjects)
    
  },

  renderProjects: (projectData) => {
    const projects = projectData.projects;
    removeAllChildNodes(sidebar.projectsParent);

    const navUl = document.createElement("ul");
    navUl.classList.add("projects-nav", "fa-ul")
    sidebar.projectsParent.appendChild(navUl);

    projects.forEach(project => {
      const li = document.createElement("li");
      const icon = document.createElement("i");
      const text = document.createElement("span");
      const spanIcon = document.createElement("span");

      icon.classList.add("fa-solid", sidebar.iconSetter(projects.indexOf(project)));
      icon.setAttribute("id", `icon-${projects.indexOf(project)}`)

      spanIcon.classList.add("fa-li")
      li.appendChild(icon);
      li.appendChild(text);
      li.appendChild(spanIcon);

      text.innerText = project;
      li.dataset.id = projects.indexOf(project);

      li.addEventListener("click", () => {
        pubsub.publish("projectChangeInitiated", li.dataset.id);
      })

      if (li.dataset.id == projectData.selectedIndex){
        li.classList.add("selected-project")
      }

      

      navUl.appendChild(li);
    });

    const addProjectBtn = document.createElement("button");
    addProjectBtn.innerText = "+ New Project";
    addProjectBtn.addEventListener("click", sidebar.renderForm);

    navUl.appendChild(addProjectBtn)

  },

  iconSetter: (id) => {
    let iconClass = "";
    if (id == 0) {
      iconClass = "fa-calendar-day"
    }
    else if (id == 1) {
      iconClass = "fa-calendar-week" 
    }
    else if (id == 2) {
      iconClass = "fa-calendar-days"
    }
    else {
      iconClass = "fa-circle";
    }

    return iconClass;
  },


  renderForm: () => {
    if (!sidebar.formGenerated) {
      const projectAddContainter = document.createElement("div");
      sidebar.parent.appendChild(projectAddContainter);

      const projectName = document.createElement("input")
      projectName.setAttribute("type", "text");
      projectName.setAttribute("id", "project-input");
      const projectNameLabel = document.createElement("label");
      projectNameLabel.setAttribute("id", "project-input");

      const submit = document.createElement("button");
      submit.innerText = "submit";
      submit.addEventListener("click", () => {
        if(projectName.value.length !== 0){
          pubsub.publish("projectAddRequested", projectName.value);
          sidebar.removeForm(projectAddContainter);
        }
      })

      const cancelBtn = document.createElement("button");
      cancelBtn.innerText = "X";
      cancelBtn.addEventListener("click", () => {
        sidebar.removeForm(projectAddContainter);
      })

      projectAddContainter.appendChild(projectNameLabel);
      projectAddContainter.appendChild(projectName);
      projectAddContainter.appendChild(submit);
      projectAddContainter.appendChild(cancelBtn);
    }
    sidebar.formGenerated = true;
  },

  removeForm: (form) => {
    sidebar.parent.removeChild(form);
    sidebar.formGenerated = false;
  },

}

export default sidebar;