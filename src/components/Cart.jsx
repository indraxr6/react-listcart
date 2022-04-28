import React from "react";
import { useCart } from "react-use-cart";


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        cartTotal,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className="text-center">Empty Cart</h1>;
    return (
        <div className="container">
            <div className="card col-12 mt-2 ">
                <div className="card-header bg-secondary text-white text-center">
                    <h4>Cart</h4>
                    <h5>
                        Cart ({totalUniqueItems}) total items: ({totalItems})
                    </h5>
                </div>

                <div className="card-body">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} alt="product" style={{ height: "6rem" }} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>$ {item.price * item.quantity}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary ms-2"
                                            onClick={() =>
                                                updateItemQuantity(item.id, item.quantity - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <button
                                            className="btn btn-success ms-2"
                                            onClick={() =>
                                                updateItemQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                        <button
                                            className="btn btn-danger ms-2"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4 className="col-auto ms-auto">
                        Total : $ {cartTotal}
                    </h4>
                    <div className="col-auto">
                        <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                             Remove All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Cart;