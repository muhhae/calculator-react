export default function InputButton({ id, txt, buttonHandler, colSpan }) {
    return (
        <>
            <button
                id={id}
                onClick={buttonHandler}
                className={" rounded-lg sm:rounded-xl font-sans font-bold text-white text-md sm:text-3xl bg-gray-500 w-8 sm:w-16 my-1 sm:my-2 h-8 sm:h-16 hover:bg-slate-600" + " col-span-" + colSpan}>
                {txt}
            </button >
        </>
    )
}

InputButton.defaultProps = {
    colSpan: 1
}