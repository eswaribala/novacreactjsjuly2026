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
    <FormField label="Mobile Number" name="mobileNo" type="number" value={formValues.mobileNo} onChange={handleChange} />
    <FormField label="Is Assisted" name="isAssisted" type="checkbox" value={formValues.isAssisted} onChange={handleChange} />
    <FormField label="Partner Code" name="partnerCode" type="text" value={formValues.partnerCode} onChange={handleChange} /> 
    <FormField label="Partner Name" name="partnerName" type="text" value={formValues.partnerName} onChange={handleChange} />
    </div>
    </>
   )

}

export default LoanForm;