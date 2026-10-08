import { createElement } from "./create-element";
import {
  registerRerenderCallback,
  resetHookIndex,
  useState,
} from "./hooks/use-state";
import { render } from "./render";
import "./style.css";

const dom = document.querySelector("#app");
if (dom) {
  registerRerenderCallback(rerender);
  rerender();
}

function rerender() {
  resetHookIndex();
  dom?.replaceChildren();
  const counterElement = Counter();
  render(counterElement, dom as HTMLElement);
}

function Counter() {
  const [counter, setCounter] = useState(0);

  const CounterButton = createElement(
    "button",
    {
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
      onClick: () => {
        setCounter(counter + 1);
        rerender();
      },
    },
    "클릭",
  );

  const CounterDisplay = createElement(
    "p",
    { id: "counter-display", style: { marginTop: "10px" } },
    `카운터 값: ${counter}`,
  );

  return createElement(
    "div",
    { id: "greeting" },
    createElement("h1", null, "Hello, Mini React!"),
    createElement("p", null, "직접 만든 렌더러 입니다."),
    CounterDisplay,
    CounterButton,
  );
}
