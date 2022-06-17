const createObject = {
  todo: (title, description, date, priority) => {
    let completed = false;
    return{title, description, date, priority, completed};
  },
}

export default createObject;