export default function InputField({ handleInput, input, result }) {

    return (
        <>
            <input
                type="text"
                className="my-2  bg-gray-500 w-full h-16 p-2 border-2 border-black"
                onChange={handleInput}
                value={input} />
            <h1 className="bg-gray-500 w-full h-16 p-2 border-2 border-black" >{result}</h1>
        </>
    )
}