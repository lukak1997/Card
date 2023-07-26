import './ThankYou.css'
import icon2 from '../images/icon-complete.svg'
import{SetStateAction , Dispatch} from 'react'

interface InputValueType {
    setIsVisible:  Dispatch<SetStateAction<boolean>>;
  }
function ThankYou(props:InputValueType){
    const{setIsVisible} = props ;
    return(
        <div className="main-thankyou">
            <img className='icon2' src={icon2}  alt='datunia2'></img>
            <p className="thankyou-text1">THANK YOU !</p>
            <p className="thankyou-text2">We’ve added your card details</p>
            <button onClick={()=>{setIsVisible(true)}} className='thankyou-button'>Continue</button>
        </div>
    );
}

export default ThankYou;
export {}