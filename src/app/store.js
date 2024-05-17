import Product from "../features/Product";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
    reducer: {
        product : productReducer,
    }
})