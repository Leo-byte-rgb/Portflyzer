import { useEffect, useMemo, useState } from "react";

interface ICountup {
  value: number;
  render: (value: number) => React.ReactNode;
}

const MAX_INTERVAL_IN_MS = 1000;

export const Countup = ({ value, render }: ICountup) => {
  const [internalValue, setInternalValue] = useState(0);

  const intervalInMs = useMemo(
    () => Math.ceil(MAX_INTERVAL_IN_MS / value),
    [value]
  );

  useEffect(() => {
    const counter = setInterval(() => {
      setInternalValue((previus) => (previus += 1));
    }, intervalInMs);

    if (internalValue >= value) {
      clearInterval(counter);
      return;
    }
    return () => {
      clearInterval(counter);
    };
  }, [internalValue, intervalInMs, value]);

  return <span>{render(internalValue)}</span>;
};
