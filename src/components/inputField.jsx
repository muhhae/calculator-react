export default function InputField({ handleInput, input, result }) {

    return (
        <>
            <input
                type="text"
                className="my-2 rounded-xl font-sans font-bold text-4xl bg-gray-500 w-full h-16 p-2 text-white hover:bg-slate-600"
                onChange={handleInput}
                value={input} />
            <h1
                className="my-2 rounded-xl font-sans font-bold text-4xl bg-gray-500 w-full h-16 p-2 text-white " >
                {result}
            </h1>
        </>
    )
}