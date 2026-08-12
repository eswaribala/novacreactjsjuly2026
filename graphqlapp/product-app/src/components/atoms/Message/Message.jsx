function Message({ text, type, className = "" }) {

  if (!text) 
    return null;
  
  const messageClassName = type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  return (
    <div className={`${messageClassName} p-4 rounded-md ${className}`}>
      {text}
    </div>
  );
}

export default Message;
