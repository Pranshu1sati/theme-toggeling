import React,{useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import {BsSun , BsSunFill} from 'react-icons/bs';
const Button = () => {
    const {handleToggleIcon, isDarkTheme}=useContext(ThemeContext);
    console.log(handleToggleIcon, isDarkTheme)
  return (
    <div className={isDarkTheme ? 'button-wrapper-dark' : 'button-wrapper-light'}>
        
           {
            isDarkTheme ? <BsSun size={32} onClick={handleToggleIcon}/> : <BsSunFill size={32} onClick={handleToggleIcon}></BsSunFill>
           }
        
    </div>
  )
}

export default Button;