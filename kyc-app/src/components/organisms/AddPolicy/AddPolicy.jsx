import { useState } from "react";
import FormField from "../../molecules/FormField/FormField";
import Message from "../../atoms/Message/Message";
import Button from "../../atoms/Button/Button";
import DropDownList from "../../atoms/DropDownList/DropDownList";
import  { beneficiaryTypeData } from "../../../data/beneficiaryTypeData.js";
import {documentTypeData} from "../../../data/documentTypeData.js";
const initialValues={
   policyNo:0,
   policyHolderName:"",
   beneficiaryType:"",
   documentType:"",
   documentNumber:"",
}

function AddPolicy() {

  const[values,setValues]=useState(initialValues);
  const[selectedOption,setSelectedOption]=useState("");

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
      <fieldset className="border border-gray-300 p-4 rounded-lg ">
       <legend className=" text-xl text-center font-semibold text-gray-900 dark:text-white">Add Policy</legend> 
      <FormField 
       id="policyNo" 
       label="Policy Number" 
       type="text" 
       value={values.policyNo==0?"":values.policyNo} 
       onChange={handleChange} 
       required 
       placeholder="Enter the policy number" 
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
       <DropDownList
        id="documentType"
        name="documentType"
        options={documentTypeData}
        placeholder="Select the document type"
        required
        className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
        
        selectedOption={values.documentType}
       /> 

      <FormField 
       id="documentNumber" 
       label="Document Number" 
       type="text" 
       value={values.documentNumber} 
       onChange={handleChange}        
       required 
       error={errorMessages.documentNumber}
       placeholder={`Enter ${values.documentType} number`}
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
    </fieldset>
    
    </form>
    </>
  );
}
export default AddPolicy;