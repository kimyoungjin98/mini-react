export type MiniReactNode = MiniElement | string;

/**
 * MiniElement 안에 MiniElement가 들어가는 재귀 타입 구조
 */
export type MiniElement = {
  type: string;
  props: {
    children: MiniReactNode[];
    [key: string]: any;
  };
};

export function createElement(
  tag: string,
  props?: Record<string, any> | null,
  ...children: MiniReactNode[]
): MiniElement {
  return {
    type: tag,
    props: {
      ...props,
      children,
    },
  };
}
