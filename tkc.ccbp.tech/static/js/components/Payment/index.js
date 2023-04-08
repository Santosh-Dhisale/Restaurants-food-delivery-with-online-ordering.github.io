import {
    Link
} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import './index.css'

const Payment = () => ( <
    CartContext.Consumer > {
        value => {
            const {
                removeAllCartItems
            } = value

            const clearCart = () => {
                removeAllCartItems()
            }

            return ( <
                >
                <
                div className = "payment-container" >
                <
                div className = "payment-card" >
                <
                img src = "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-success-tick_anqrey.png"
                alt = "success"
                className = "payment-image" /
                >
                <
                h1 className = "payment-heading" > Payment Successful < /h1> <
                p className = "payment-text" >
                Thank you
                for ordering Your payment is successfully completed. <
                /p> <
                Link to = "/" >
                <
                button type = "button"
                className = "home-btn"
                onClick = {
                    clearCart
                } >
                Go To Home Page <
                /button> <
                /Link> <
                /div> <
                /div> <
                />
            )
        }
    } <
    /CartContext.Consumer>
)

export default Payment