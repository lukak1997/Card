import "./MainCard.css";
import logo from '../images/card-logo.svg'
interface InputValueType {
  inputValueName: string;
  inputValueNumber: string;
  inputValueMonth: string;
  inputValueYear: string;
  inputValueCvc: string;
}
function MainCard(props: InputValueType) {
  const {
    inputValueName,
    inputValueNumber,
    inputValueMonth,
    inputValueYear,
    inputValueCvc,
  } = props;
  return (
    <div className="main-div">
      <div className="mainc-background"></div>

      <div className="visa-card">
        <img className='icon1' src={logo}  alt='datunia'></img>
        <p className="inputNumber">
          {inputValueNumber ? inputValueNumber
            .split("")
            .map((num, index) =>
              (index + 1) % 4 === 0 ? (num = num + " ") : (num)
            )
            :
            "0000 0000 0000 0000"
          }
        </p>
        <p className="inputName">{inputValueName ? inputValueName : 'Name Surname'}</p>
        <p className="inputData">{inputValueMonth ? inputValueMonth : '00'}/{inputValueYear ? inputValueYear : '00'}</p>
      </div>
      <div className="visa-card-back">
        <p className='inputCvc'>{inputValueCvc ? inputValueCvc : '000'}</p>
      </div>
    </div>
  );
}

export default MainCard;

export {};
