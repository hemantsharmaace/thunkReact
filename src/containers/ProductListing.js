import { useDispatch, useSelector } from "react-redux";
import React,{ useEffect }from "react"
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts,fetchProducts } from '../redux/actions/productAction'
const ProductListing = () => {

    const products = useSelector((state)=>state);
    //console.log(products);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    return (
        <div className="ui grid container" style={{marginTop : 'auto'}}>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;