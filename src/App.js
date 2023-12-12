import  { useState } from "react";

function App() {
  const [hideText, setHideText] = useState(false);

  const onClick = () => setHideText(true);
  const onOff = () => setHideText(false);
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <button onClick={onOff}>Off</button>
      {hideText ? <Text /> : null}
    </div>
  );
}

const Text = () => <div>I will disappear, true Magic</div>;
export default App;