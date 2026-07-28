
function Message({ text,type}) {
    if (!text) {
        return null;
    }
    const className = type === "success" ? "bg-green-500 text-white px-4 py-2 rounded-md shadow-md" : "bg-red-500 text-white px-4 py-2 rounded-md shadow-md";
    return (
        <div className={className}>
            {text}
        </div>
    );
}

export default Message;