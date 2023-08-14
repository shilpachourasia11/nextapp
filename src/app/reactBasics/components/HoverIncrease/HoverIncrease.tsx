import { useState } from "react"
import WithCounter from "../hoc/WithCounter";

interface Proptypes {
  counter?: number;
  countIncrease?: () => {};
}

const HoverIncrease: React.FC<Proptypes> = ({ counter, countIncrease }) => {
  return (
    <div>
      <button onMouseOver={countIncrease}>Increase font size on Hover</button>
      <div style={{ fontSize: counter + 'px' }}>Font size is: {counter}</div>
    </div>
  )
}

export default WithCounter(HoverIncrease);