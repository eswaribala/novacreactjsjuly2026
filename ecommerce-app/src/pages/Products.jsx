import ViewProducts from "../components/organisms/ViewProducts/ViewProducts";
import AddProduct  from "../components/organisms/AddProduct/AddProduct";
export function Products() {
    return (
        <div>
            <ViewProducts/>
        </div>
    );
}
export function AddProducts() {
    return (
        <div className="flex flex-col full">
            <AddProduct/>
        </div>
    );
}

export function UpdateProducts() {
    return (
        <div>
            <h1>Update Products Page</h1>
            {/* Add your products content here */}
        </div>
    );
}

export function DeleteProducts() {
    return (
        <div>
            <h1>Delete Products Page</h1>
            {/* Add your products content here */}
        </div>
    );
}