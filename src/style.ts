export type MiniElementStyle = {
  [key: string]: string;
};

export function styleToString(style: MiniElementStyle): string {
  return Object.entries(style)
    .map(([key, value]) => {
      // camelCase를 kebab-case로 변환
      const cssKey = key.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
      return `${cssKey}: ${value};`;
    })
    .join(" ");
}
