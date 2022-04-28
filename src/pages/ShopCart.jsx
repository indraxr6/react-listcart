import ShoppingCart from "../components/ShoppingCart";
import Cart from "../components/Cart";
import { CartProvider } from "react-use-cart";

function ShopCart() {
    return (
        
            <CartProvider>
                <ShoppingCart />
                <Cart />
            </CartProvider>
        
    )
}

export default ShopCart;