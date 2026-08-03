import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";
import Message from "../../atoms/Message/Message";
import TextArea from "../../atoms/TextArea/TextArea";
import { useState } from "react";
function AddProduct() {

   const initialValues ={
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,    
    }

   const [values, setValues] = useState(initialValues);
   const [errorMessages, setErrorMessages] = useState({});
   const handleChange = (e) => {
    const {id, value} = e.target;
    setValues({...values, [id]: value});
   }

   const validateForm = () => {
    const errors = {};
    
    const name = values.name.trim();
    const description = values.description.trim();
    const price = values.price;
    const category = values.category.trim();
    const stock = values.stock;

    if (!name) {
      errors.name = "Name is required.";
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      errors.name = "Name can contain only letters and spaces.";
    }

    if (!description) {
      errors.description = "Description is required.";
    }

    if (price <= 0) {
      errors.price = "Price must be greater than 0.";
    }

    if (!category) {
      errors.category = "Category is required.";
    }

    if (stock < 0) {
      errors.stock = "Stock cannot be negative.";
    }

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log('New Product values:', values);
    
   }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate
  className="space-y-4 ">
  <fieldset className="border border-blue-700 p-4 rounded-lg">
      <legend className="mb-4 text-2xl text-center font-semibold text-gray-900 dark:text-white">
        Add New Product
      </legend>

         {errorMessages.general && (
        <Message
          type="error"
          text={errorMessages.general}
          className="mb-4"
        />
      )}  
      <div className="flex flex-col gap-4 font-bold text-gray-900 text-3xl">
      <FormField 
       id="name" 
       label="Name" 
       type="text" 
       value={values.name} 
       onChange={handleChange} 
       required 
       placeholder="Enter your name" 
       error={errorMessages.name}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

       <TextArea 
       id="description" 
       label="Description" 
       type="text" 
       value={values.description} 
       onChange={handleChange} 
       required 
       placeholder="Enter product description" 
       error={errorMessages.description}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
       <FormField 
       id="price" 
       label="Price"
       type="number" 
       value={values.price==0?"":values.price} 
       onChange={handleChange} 
       required 
       placeholder="Enter product price" 
       error={errorMessages.price}
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
       <FormField 
       id="category" 
       label="Category" 
       type="text" 
       value={values.category} 
       onChange={handleChange}        
       required 
       error={errorMessages.category}
       placeholder="Enter product category" 
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
       <FormField 
       id="stock" 
       label="Stock" 
       type="number" 
       value={values.stock==0?"":values.stock} 
       onChange={handleChange}        
       required 
       error={errorMessages.stock}
       placeholder="Enter product stock"
       className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
    </div>   
    <div className="flex justify-center">
    <Button type="submit"
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
      Submit
    </Button>
    </div>
    </fieldset>
    </form>
    </>
    
  );


}

export default AddProduct;