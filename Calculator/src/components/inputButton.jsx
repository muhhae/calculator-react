export default function InputButton({ id, txt, buttonHandler, colSpan }) {
    return (
        <>
            <button id={id} onClick={buttonHandler} className={"rounded-xl font-sans font-bold text-white text-3xl bg-gray-500 w-16 my-2 h-16 hover:bg-slate-600" + " col-span-" + colSpan}> {txt}</button >
        </>
    )
}
