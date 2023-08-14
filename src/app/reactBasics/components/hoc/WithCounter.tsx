import { Component, ComponentType, useState } from "react"

interface WithCounterProps {
  
}

const withCounter = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P & WithCounterProps> => {
  const NewComponent: React.FC<P & WithCounterProps> = (props) => {
    const [counter, increaseCounter] = useState<number>(0);
    const countIncrease = () => increaseCounter(counter + 5);
    const newProps = {
      ...props,
      counter,
      countIncrease
    };
    return <WrappedComponent {...newProps as P} />
  }
  return NewComponent;
}

export default withCounter;
