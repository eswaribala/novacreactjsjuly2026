import { ToastContainer } from "react-toastify";

function Toast(){
    return(
        <div>
            <ToastContainer position="top-right" theme="colored" 
            closeOnClick  
            autoClose={3000}>
                
            </ToastContainer>
        </div>
    )
}

export default Toast