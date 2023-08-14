import withCounter from "../hoc/WithCounter";

interface Proptypes {
  counter?: number;
  countIncrease?: () => {};
}

const HoverIncrease: React.FC<Proptypes> = ({ counter, countIncrease }) => {
  return (
    <div>
      <button onClick={countIncrease}>Increase font size on Hover</button>
      <div style={{ fontSize: counter + 'px' }}>Font size is: {counter}</div>
    </div>
  )
}

export default withCounter(HoverIncrease);