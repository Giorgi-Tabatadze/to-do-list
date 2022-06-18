import "./style.css"
import todoData from "./tododata";
import mainList from "./dommanagment/mainlist";
import topUi from "./dommanagment/ui";



const domStuff = (() => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  body.appendChild(content)

  const header = document.createElement("header");
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  content.appendChild(aside);
  content.appendChild(header);
  content.appendChild(main);

  topUi.render(header);
  mainList.renderContainer(main);
})();




