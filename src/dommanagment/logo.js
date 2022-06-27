const logo = {
  render: (container) => {
    const logoText = document.createElement("h1");
    logoText.setAttribute("id", "logo");
    logoText.innerText = "TODO LIST"
    logoText.addEventListener("click", ()=> {
      location.reload();
    });
    container.appendChild(logoText);
  }
}

export default logo;