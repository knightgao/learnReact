import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState<Array<string>>([]);

  useEffect(() => {
    () => {
      console.log("111");
      return () => {
        console.log("2222");
      };
    };
  }, [list]);

  const add = function () {
    setList(() => {
      const newValue = [...list];
      newValue.push(message);
      setMessage("");
      return newValue;
    });
  };

  // 消息
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <input value={message} onChange={handleChange}></input>
      <button onClick={add}>add</button>
      <ul>
        {list.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
