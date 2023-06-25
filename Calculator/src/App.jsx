import InputField from "./components/inputField"
import { useState } from "react"

function App() {
  var [result, setResult] = useState("0")
  var [input, setInput] = useState("")

  var handleInput = (e) => {
    setInput(e.target.value);
    setResult(eval(e.target.value));
  }

  return (
    <>
      <div className="h-screen bg-gray-700 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
          <h1 className='text-white text-center text-5xl font-bold'>KALKULATOR</h1>
          <br />
          <div className=" text-left text-white font-bold text-2xl p-2">
            <InputField input={input} result={result} handleInput={handleInput} />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default App


