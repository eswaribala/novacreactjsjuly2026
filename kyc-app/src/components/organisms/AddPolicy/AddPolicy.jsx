import { useState } from "react";
import FormField from "../../molecules/FormField/FormField";
import Message from "../../atoms/Message/Message";
import Button from "../../atoms/Button/Button";
import DropDownList from "../../atoms/DropDownList/DropDownList";
import  { beneficiaryTypeData } from "../../../data/beneficiaryTypeData.js";
const initialValues={
   policyNo:0,
   policyHolderName:"",
   beneficiaryType:"",
   documentType:"",
   documentNumber:"",
}

function AddPolicy() {

  const[values,setValues]=useState(initialValues);
  const[errorMessages,setErrorMessages]=useState({});

  const handleChange=(e)=>{
    const {id,value}=e.target;
    setValues({...values,[id]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
  }

  return (
    <>
    <form onSubmit={handleSubmit} noValidate
  className="space-y-4">
         {errorMessages.general && (
        <Message
          type="error"
          text={errorMessages.general}
          className="mb-4"
        />
      )}  
      <FormField 
       id="policyNo" 
       label="Policy Number" 
       type="text" 
       value={values.policyNo} 
       onChange={handleChange} 
       required 
       placeholder="Enter your policy number" 
       error={errorMessages.policyNo}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

       <FormField 
       id="policyHolderName" 
       label="Policy Holder Name" 
       type="text" 
       value={values.policyHolderName} 
       onChange={handleChange} 
       required 
       placeholder="Enter the policy holder name" 
       error={errorMessages.policyHolderName}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
       <DropDownList
        id="beneficiaryType"
        name="beneficiaryType"
        options={beneficiaryTypeData}
        placeholder="Select the beneficiary type"
        required
        className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
        selectedOption={values.beneficiaryType}
       /> 
       <FormField 
       id="documentType" 
       label="Document Type" 
       type="text" 
       value={values.documentType} 
       onChange={handleChange}        
       required 
       error={errorMessages.documentType}
       placeholder="Enter the document type" 
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

      <FormField 
       id="documentNumber" 
       label="Document Number" 
       type="text" 
       value={values.documentNumber} 
       onChange={handleChange}        
       required 
       error={errorMessages.documentNumber}
       placeholder="Enter the document number" 
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" /> 
    <div className="flex justify-center">
    <Button type="submit" disabled={false}
    className="h-14
      
      w-72
      rounded-xl
      bg-blue-600
      text-lg
      font-semibold
      text-white
      shadow-md
      transition-all
      duration-300
      hover:bg-blue-700
      hover:shadow-lg
      focus:outline-none
      focus:ring-4
      focus:ring-blue-200">
      {'Add Policy'}
    </Button>
    </div>
    
    
    </form>
    </>
  );
}
export default AddPolicy;