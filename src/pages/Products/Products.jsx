import React, { useEffect, useState, useContext } from 'react';
import StoreContext from 'components/Store/Context';
import Header from 'components/Header/Header';
import ProductsTable from 'components/ProductsTableComponent/ProductsTable';
import { getProducts } from 'services/api';

const PagesProducts = () => {
    const [productsState, setProducts] = useState([]);
    const { token } = useContext(StoreContext);

    useEffect(() => {
        getProducts(token).then(response => {
            setProducts(response.data)
        })
    }, [token]);
    
    return (
        <>
            <Header />
            <ProductsTable
                ordersArray={productsState}
            />
        </>
    );
};

export default PagesProducts;