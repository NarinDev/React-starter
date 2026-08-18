import {useState} from "react";

function Shop() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.currentTarget.value));
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value);
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPayment(e.currentTarget.value);
    };

    const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShipping(e.currentTarget.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange }/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio"
                       value="Pick up"
                       checked={shipping === "Pick up"}
                       onChange={handleShippingChange} />
                Pick up
            </label>
            <br/>
            <label>
                <input type="radio"
                       value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
)
}

export default Shop;
