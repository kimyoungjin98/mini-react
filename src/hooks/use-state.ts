const states: unknown[] = [];
let hookIndex = 0;

export function registerRerenderCallback(callback: () => void) {
  // 상태가 변경될 때마다 호출되는 콜백을 등록하는 로직을 구현할 수 있습니다.
  // 예를 들어, 상태 변경 시 UI를 다시 렌더링하도록 설정할 수 있습니다.
  // 이 예제에서는 간단히 콘솔에 메시지를 출력하도록 합니다.
  callback();
}

export function resetHookIndex() {
  hookIndex = 0;
}

export function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  const currentIndex = hookIndex++;

  // 현재 인덱스에 해당하는 상태가 존재하지 않으면 초기값으로 설정
  if (!(currentIndex in states)) {
    states[currentIndex] = initialValue;
  }

  const state = states[currentIndex] as T;
  const setState = (newValue: T) => {
    states[currentIndex] = newValue;
  };

  return [state, setState];
}
