const createObject = {
  todo: (title, description, date, priority) => {
    let completed = false;
    let project = "general";
    return{title, description, date, priority, completed, project};
  },
}

export default createObject;