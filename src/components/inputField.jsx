export default function InputField({ handleInput, input, result }) {

    return (
        <>
            <input
                type="text"
                className="my-1 sm:my-2 rounded-lg sm:rounded-xl font-sans font-bold text-2xl sm:text-4xl bg-gray-500 w-full h-8 sm:h-16 p-1 sm:p-2 text-white hover:bg-slate-600"
                onChange={handleInput}
                value={input} />
            <h1
                className="my-1 sm:my-2 rounded-lg sm:rounded-xl font-sans font-bold text-2xl sm:text-4xl bg-gray-500 w-full h-8 sm:h-16 p-1 sm:p-2 text-white " >
                {result}
            </h1>
        </>
    )
}