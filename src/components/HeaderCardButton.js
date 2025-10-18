// import CarIcon from "./CartIcon"
import { useDispatch, useSelector } from 'react-redux'
import classes from '../styles/HeaderCardButton.module.css'
import { useNavigate } from "react-router-dom"
import { addToCart2 } from "../redux/actionCreaters/index";

const HeaderCardButton = (props) => {

    const dispatch = useDispatch()
    const totalQuantity = useSelector((state) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );



    const navigate = useNavigate()
    const handlechange = () => {
        navigate('/Cartitems')
    }
    return <button className={classes.button} onClick={handlechange}>
        {/* <span className={classes.icon}><CarIcon/></span> */}
        <span> Your Cart</span>
        <span className={classes.badge}>{totalQuantity}</span>
    </button>
}

export default HeaderCardButton;