import { useEffect } from "react";
import { useDispatch } from "react-redux";
import 

const Product = () => {

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllProducts())
    }, [])

    return (
        <div>
            <h1>Product</h1>
        </div>
    );
};

export default Product;