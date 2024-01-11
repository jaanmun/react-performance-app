import React, { useMemo } from 'react';

// 복잡한 연산이라고 가정
const compute = (a, b) => {
  return a + b;
};

/**
 * Component 내의 compute 함수가 만약 복잡한 연산을 수행하면 결과 값을 리턴하는데
 * 오랜 시간이 걸리게 된다. 이런 경우 컴포넌트가 계속 리 렌더링 된다면 연산을
 * 수행하는데 오랜 시간이 걸려서 성능에 안 좋은 영향을 미치게 되며,
 * UI 지연 현상도 일어나게 될 수 있다.
 *
 * 이러한 현상을 개선하기 위해 사용되는 것이 useMemo이다.
 */

/**
 * useMemo 사용 방법
 *
 * 기존 작성된 함수에 useMemo로 감싸준 후에
 * 두 번째 인자로 의존성 배열에 compute 함수에서 사용하는 값을 넣어주면 된다.
 *
 * 이렇게 작성해주면 a와 b의 값이 이전과 동일하다면 컴포넌트가 리 렌더링되더라도
 * 연산을 다시 하지 않고 이전 렌더링 때 저장해두었던 값을 재활용하게 된다.
 */
const C = ({ a, b }) => {
  const result = useMemo(() => compute(a, b), [a, b]);
  return <div>{result}</div>;
};

export default C;
