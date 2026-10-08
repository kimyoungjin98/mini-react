import type { MiniElementStyle } from "./style";

export type MiniReactNode = MiniElement | string;

export type FunctionComponent = (props: CreateElementProps) => MiniReactNode;

export type ElementType = string | FunctionComponent;

export type CreateElementProps = {
  id?: string;
  style?: MiniElementStyle;
  className?: string;
  children?: MiniReactNode[];
  [key: string]: any;
};

/**
 * MiniElement 안에 MiniElement가 들어가는 재귀 타입 구조
 */
export type MiniElement = {
  type: ElementType;
  props: {
    children: MiniReactNode[];
    [key: string]: any;
  };
};

export function createElement(
  tag: ElementType,
  props?: CreateElementProps | null,
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
