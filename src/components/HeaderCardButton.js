import CarIcon from "./CartIcon"
import classes from '../styles/HeaderCardButton.module.css'
import { useNavigate } from "react-router-dom"

const HeaderCardButton =(props)=>{
          const navigate = useNavigate()
    const handlechange = ()=>{
           navigate('/Cartitems')
    }
    return <button className={classes.button} onClick={handlechange}>
        <span className={classes.icon}><CarIcon/></span>
        <span> Your Cart</span>
        <span className={classes.badge}>1</span>
    </button>
}

export default HeaderCardButton;