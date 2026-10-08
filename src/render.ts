/**
 * Rule
 * 1. 문자열이면 `document.createTextNode`로 텍스트 노드 만들기
 * 2. 요소 객체면 `document.createElement`로 DOM 만들기
 * 3. `children`을 제외한 속성을 `setAttribute`로 적용하기
 * 4. 각 자식을 같은 방식으로 렌더링해 만든 DOM에 붙이기
 * 5. 완성한 DOM을 전달받은 컨테이너에 붙이기
 */

import type { MiniReactNode } from "./create-element";

// 기댓값
// render(
//   createElement('h1', { id: 'title' }, 'Hello'),
//   document.querySelector('#app')!
// )

export function render(element: MiniReactNode, container: HTMLElement) {
  // element가 문자열이면 텍스트 노드 만들기
  if (typeof element === "string") {
    const textNode = document.createTextNode(element);
    container.appendChild(textNode);
    return;
  }

  // element가 MiniElement이면 DOM 만들기
  const domElement = document.createElement(element.type);

  // element.props에서 children을 제외한 속성을 setAttribute로 적용하기
  for (const [key, value] of Object.entries(element.props)) {
    // children는 이미 처리했으므로 건너뛰기
    if (key === "children") {
      continue;
    }

    // 이벤트 판별
    if (key.startsWith("on") && typeof value === "function") {
      const eventType = key.slice(2).toLowerCase();
      domElement.addEventListener(eventType, value);
      continue;
    }

    // setAttribute로 속성 적용
    domElement.setAttribute(key, value);
  }

  // element.props.children를 순회하며 재귀적으로 render 호출
  element.props.children.forEach((child) => render(child, domElement));

  // 완성한 DOM을 전달받은 컨테이너에 붙이기
  container.appendChild(domElement);
}
