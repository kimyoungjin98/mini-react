import { createElement } from "./create-element";
import { render } from "./render";
import "./style.css";

const dom = document.querySelector("#app");
if (dom) {
  const button = createElement(
    "button",
    {
      onClick: () => alert("버튼 클릭!"),
      id: "my-button",
      style: {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        marginTop: "10px",
      },
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
