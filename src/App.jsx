import InputField from "./components/inputField"
import InputButton from "./components/inputButton"


import { useState } from "react"

function App() {
  var [result, setResult] = useState("")
  var [input, setInput] = useState("")

  var handleInput = (e) => {
    setInput(e.target.value);
    setResult(eval(e.target.value));
  }

  var buttonHandler = (e) => {
    setInput(input + e.target.id);
    setResult(eval(input + e.target.id));
  }

  var ac = () => {
    setInput("");
    setResult("");
  }

  var del = () => {
    setInput(input.slice(0, -1));
    setResult(eval(input.slice(0, -1)));
  }


  let numBtn = []
  for (let i = 1; i < 10; i++) {
    numBtn.push(<InputButton id={i} txt={i} buttonHandler={buttonHandler} />)
  }
  numBtn.push(
    <InputButton id="AC" txt="AC" buttonHandler={ac} />
  )
  numBtn.push(
    <InputButton id={0} txt={0} buttonHandler={buttonHandler} colSpan={1} />
  )
  numBtn.push(
    <InputButton id="DEL" txt="DEL" buttonHandler={del} />
  )

  const op = ["+", "-", "*", "/", ".", "%", "(", ")"]
  let opBtn = op.map(e => <InputButton id={e} txt={e} buttonHandler={buttonHandler} />)

  return (
    <>
      <div className="h-screen bg-gray-700 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg max-w-md p-8 shadow-2xl">
          <h1 className='text-white text-center text-5xl font-bold'>KALKULATOR</h1>
          <br />
          <InputField input={input} result={result} handleInput={handleInput} />
          <div className="grid grid-cols-5 w-full">
            <div className="col-span-3 grid grid-cols-3 justify-items-stretch w-full ">
              {numBtn}
            </div>
            <div className="col-span-2 grid grid-cols-2 justify-items-end w-full ">
              {opBtn}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


