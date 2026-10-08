import { createElement } from "./create-element";
import { render } from "./render";
import "./style.css";

const dom = document.querySelector("#app");
if (dom) {
  const button = createElement(
    "button",
    {
      onClick: () => alert("버튼 클릭!"),
      style:
        "margin-top:10px; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; max-width: 200px; width: 100%;",
    },
    "클릭",
  );

  const div = createElement(
    "div",
    { id: "greeting" },
    createElement("h1", null, "Hello, Mini React!"),
    createElement("p", null, "직접 만든 렌더러 입니다."),
    button,
  );

  render(div, dom as HTMLElement);
}
