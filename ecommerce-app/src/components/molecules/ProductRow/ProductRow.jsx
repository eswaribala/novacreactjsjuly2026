import Button from "../../atoms/Button/Button";
import { memo } from "react";
function ProductRow({ product,index,onEdit, onDelete }) {
    return (
         <tr key={product._id || product.id} className={`${
    index % 2 === 0 ? "bg-white" : "bg-gray-100"
  } hover:bg-blue-100`} >
                            <td className="border border-gray-300 px-4 py-3">{ product.productId}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.description}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.category}</td>
                            <td className="border border-gray-300 px-4 py-3">{parseInt(product.price)}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.stock}</td>
                            <td>
                                <div className="flex gap-2 justify-center items-center">
                                <Button type="button" className="w-20 inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700" onClick={() => onEdit(product)}>
                                    Edit
                                </Button>
                           
                                <Button type="button" className="w-20 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700" onClick={() => onDelete(product.productId)}>
                                    Delete
                                </Button>
                                </div>
                            </td>
                        </tr>
    )
}



export default memo(ProductRow);
