//create loan application form
import { useState } from 'react';
import FormField from '../FormField/FormField';
const initialValues={
    mobileNo:0,
    isAssisted:false,
    partnerCode:'', 
    partnerName:'',   
}

function LoanForm() {

    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({ ...formValues, [name]: type === 'checkbox' ? checked : value });
    }

   return(
    <>
    {/*create form grid using Form field and tailwindcss */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <FormField 
       id="mobileNo" 
       label="Mobile Number" 
       type="number" 
       value={formValues.mobileNo} 
       onChange={handleChange} 
       required 
       placeholder="Enter your mobile number" 
     
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
     <FormField 
       id="isAssisted" 
       label="Is Assisted" 
       type="checkbox" 
       checked={formValues.isAssisted} 
       onChange={handleChange} 
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

<FormField 
       id="partnerCode" 
       label="Partner Code" 
       type="text" 
       value={formValues.partnerCode} 
       onChange={handleChange} 
       required 
       placeholder="Enter your partner code" 
     
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

<FormField 
       id="partnerName" 
       label="Partner Name" 
       type="text" 
       value={formValues.partnerName} 
       onChange={handleChange} 
       required 
       placeholder="Enter your partner name" 
     
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

    </div>
    </>
   )

}

export default LoanForm;