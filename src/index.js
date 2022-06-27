import "normalize.css"
import "./style.css"
import "./checkbox.scss"
import todoData from "./tododata";
import mainList from "./dommanagment/mainlist";
import topUi from "./dommanagment/ui";
import sidebar from "./dommanagment/sidebar";
import logo from "./dommanagment/logo";
import { pubsub } from "./utility/pubsub";



const head = document.querySelector("head");
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/f7686ece1f.js";
script.setAttribute("crossorigin", "anonymous")
head.appendChild(script)

const domStuff = (() => {
  const body = document.querySelector("body");
  const background = document.createElement("div");
  body.appendChild(background);
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  body.appendChild(content)

  const header = document.createElement("header");
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  content.appendChild(aside);
  content.appendChild(header);
  content.appendChild(main);

  logo.render(header);
  topUi.render(header);
  mainList.renderContainer(main);
  sidebar.render(aside);
  pubsub.publish("pageLoaded");



  const addBackgroundBlocker = () => {
    background.classList.add("disableDiv")
  };
  const removeBackgroundBlocker = () => {
    background.classList.remove("disableDiv")
  };


  pubsub.subscribe("todoListEdited", removeBackgroundBlocker);
  pubsub.subscribe("todoEditRequested", removeBackgroundBlocker);
  pubsub.subscribe("formUsed", removeBackgroundBlocker);
  pubsub.subscribe("popUpClosed", removeBackgroundBlocker);
  pubsub.subscribe("popUpOpened", addBackgroundBlocker);
})();




