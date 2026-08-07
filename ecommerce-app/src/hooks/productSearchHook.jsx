import { useState, useMemo } from 'react';
function useProductSearch({products=[]}) {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = useMemo(() => {
       
        const searchTermLower = searchTerm.toLowerCase();
        if(!searchTermLower) return products;
        return products.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(searchTermLower);
            const descriptionMatch = product.description.toLowerCase().includes(searchTermLower);
            return nameMatch || descriptionMatch;
        });

    }, [products, searchTerm]);

    return { searchTerm, setSearchTerm, filteredProducts };

    
}

export default useProductSearch;