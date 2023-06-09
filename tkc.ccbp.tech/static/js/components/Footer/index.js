import {
    FaPinterestSquare,
    FaInstagram,
    FaTwitter,
    FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => ( <
    div className = "footer-container" >
    <
    div className = "logo-container" >
    <
    img src = "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-logo-light_aonpbm.png"
    alt = "website-footer-logo"
    className = "logo" /
    >
    <
    h1 className = "footer-heading" > Tasty Kitchens < /h1> <
    /div> <
    p className = "footer-desc" >
    The only thing we are serious about is food. <
    br / > Contact us on <
    /p> <
    div className = "social-icons-container" >
    <
    FaPinterestSquare testid = "pintrest-social-icon"
    className = "social-website-icon" /
    >
    <
    FaInstagram testid = "instagram-social-icon"
    className = "social-website-icon" /
    >
    <
    FaTwitter testid = "twitter-social-icon"
    className = "social-website-icon" / >
    <
    FaFacebookSquare testid = "facebook-social-icon"
    className = "social-website-icon" /
    >
    <
    /div> <
    /div>
)

export default Footer