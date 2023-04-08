import {
    Link
} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => ( <
    div className = "empty-cart-container" >
    <
    img src = "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-empty-cart_bkexof.png"
    className = "empty-cart-image"
    alt = "empty cart" /
    >
    <
    h1 className = "no-order-heading" > No Order Yet! < /h1> <
    p className = "no-order-text" >
    Your cart is empty.Add something from the menu. <
    /p> <
    Link to = "/" >
    <
    button type = "button"
    className = "order-btn" >
    Order Now <
    /button> <
    /Link> <
    /div>
)

export default EmptyCartView