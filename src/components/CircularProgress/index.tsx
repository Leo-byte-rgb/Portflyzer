import { useEffect, useMemo, useState } from "react";
import { Progress, Container, Label } from "./styles";

interface ICircularProgress {
  value: number;
}

const MAX_TIMEOUT_IN_MS = 100;

export const CircularProgress = ({ value }: ICircularProgress) => {
  const [degrees, setDegrees] = useState(0);

  const MAX_DEGREE_BASED_IN_VALUE = useMemo(() => value * 3.6, [value]);

  const PER_STEP_MILISECONDS = useMemo(
    () => Math.ceil(MAX_TIMEOUT_IN_MS / value),
    [value]
  );

  useEffect(() => {
    const setIntervalValueOnTimeOut = setInterval(() => {
      setDegrees((previus) => (previus += 1));
    }, PER_STEP_MILISECONDS);

    if (degrees >= MAX_DEGREE_BASED_IN_VALUE) {
      clearInterval(setIntervalValueOnTimeOut);
      return;
    }

    return () => {
      clearInterval(setIntervalValueOnTimeOut);
    };
  }, [degrees, MAX_DEGREE_BASED_IN_VALUE, PER_STEP_MILISECONDS]);

  return (
    <Container>
      <Progress degrees={degrees}>
        <Label>
          <span>{Math.round(degrees / 3.6)}%</span>
        </Label>
      </Progress>
    </Container>
  );
};
