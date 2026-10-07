import { render } from "./render";
import "./style.css";

const dom = document.querySelector("#app");
if (dom) {
  render(
    {
      type: "div",
      props: {
        id: "greeting",
        children: [
          {
            type: "h1",
            props: {
              children: ["Hello, Mini React!"],
            },
          },
          {
            type: "p",
            props: {
              children: ["직접 만든 렌더러 입니다."],
            },
          },
        ],
      },
    },
    dom as HTMLElement,
  );
}
