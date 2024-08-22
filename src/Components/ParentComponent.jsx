import { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export default function ParentComponent() {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, []);
  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 15000);
  }, []);

  return (
    <div>
      <Title />
      <Count text={"Age:"} count={age} />
      <Button handleClick={incrementAge}> Increment Age </Button>
      <Count text={"Salary:"} count={salary} />
      <Button handleClick={incrementSalary}> Increment Salary </Button>
    </div>
  );
}
