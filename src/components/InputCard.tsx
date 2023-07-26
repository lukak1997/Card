import "./InputCard.css";
import { useRef } from "react";

interface InputValueType {
  inputValueName: string;
  inputValueNumber: string;
  inputValueMonth: string;
  inputValueYear: string;
  inputValueCvc: string;
  setInputValueName: (value: string) => void;
  setInputValueNumber: (value: string) => void;
  setInputValueMonth: (value: string) => void;
  setInputValueYear: (value: string) => void;
  setInputValueCvc: (value: string) => void;
  setIsVisible: (value: boolean) => void;
}

function InputCard(props: InputValueType) {
  const {
    inputValueName,
    inputValueNumber,
    inputValueMonth,
    inputValueYear,
    inputValueCvc,
    setInputValueName,
    setInputValueNumber,
    setInputValueMonth,
    setInputValueYear,
    setInputValueCvc,
    setIsVisible,
  } = props;
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);

  const handleInputChange = () => {
    if (input2Ref.current?.value && input2Ref.current?.value.length < 16) {
      input2Ref.current.style.border = "1px solid red";
    } else {
      input2Ref.current.style.border = "2px solid #DFDEE0";
    }
  };
  const handleInputChange2 = () => {
    if (!input3Ref.current?.value || input3Ref.current?.value.length >= 2) {
      input3Ref.current.style.border = "2px solid #DFDEE0";
    } else {
      input3Ref.current.style.border = "1px solid red";
    }
  };

  const handleInputChange3 = () => {
    if (!input4Ref.current?.value || input4Ref.current?.value.length >= 2) {
      input4Ref.current.style.border = "2px solid #DFDEE0";
    } else {
      input4Ref.current.style.border = "1px solid red";
    }
  };

  const handleInputChange4 = () => {
    if (!input5Ref.current?.value || input5Ref.current?.value.length >= 3) {
      input5Ref.current.style.border = "2px solid #DFDEE0";
    } else {
      input5Ref.current.style.border = "1px solid red";
    }
  };

  return (
    <div className="mainc-div-form">
      <form className="form-div">
        <div className="name-number-div">
          <label className="label">CARDHOLDER NAME</label>
          <input
            className="name-input"
            placeholder="e.g. Name Surname"
            ref={input1Ref}
            type="text"
            value={inputValueName}
            onKeyDown={(e) => {
              if (/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              if (e.target.value.length <= 25) {
                setInputValueName(e.target.value);
              }
            }}
          />
          <label className="label">CARD NUMBER</label>
          <input
            className="number-input"
            placeholder="e.g. 1234 5678 9123 0000"
            ref={input2Ref}
            type="number"
            value={inputValueNumber}
            onKeyDown={(e) => {
              if (e.key === "e") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              handleInputChange();
              if (e.target.value.length <= 16) {
                setInputValueNumber(e.target.value);
              }
            }}
          />
          {!input2Ref.current?.value ||
          input2Ref.current?.value.length === 16 ? null : (
            <p className="error1">
              Wrong format, numbers only . Must Be 16 Digits
            </p>
          )}
          <div className="label-div">
            <label className="label">Exp. Date (MM/YY) </label>
            <label className="label">Cvc </label>
          </div>
        </div>
        <div className="exp-div">
          <input
            className="month-input"
            placeholder="MM"
            ref={input3Ref}
            type="number"
            value={inputValueMonth}
            onKeyDown={(e) => {
              if (e.key === "e") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              handleInputChange2();
              if (e.target.value.length <= 2 && e.target.value <= "12") {
                setInputValueMonth(e.target.value);
              }
            }}
          />
          <input
            className="year-input"
            placeholder="YY"
            ref={input4Ref}
            type="number"
            value={inputValueYear}
            onKeyDown={(e) => {
              if (e.key === "e") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              handleInputChange3();
              if (e.target.value.length <= 2 && e.target.value <= "35") {
                setInputValueYear(e.target.value);
              }
            }}
          />

          <input
            className="cvc-input"
            placeholder="e.g. 123"
            ref={input5Ref}
            type="number"
            value={inputValueCvc}
            onKeyDown={(e) => {
              if (e.key === "e") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              handleInputChange4();
              if (e.target.value.length <= 3) {
                setInputValueCvc(e.target.value);
              }
            }}
          />
        </div>
        {(!input3Ref.current?.value &&
          !input4Ref.current?.value &&
          !input5Ref.current?.value) ||
        (input3Ref.current?.value.length === 2 &&
          input4Ref.current?.value.length === 2 &&
          input5Ref.current?.value.length === 3) ? null : (
          <p className="blank">Can't be blank</p>
        )}
      </form>
      <button
        onClick={(e) => {
          if (
            input1Ref.current?.value.length >= 5 &&
            input2Ref.current?.value.length === 16 &&
            input3Ref.current?.value.length === 2 &&
            input4Ref.current?.value.length === 2 &&
            input5Ref.current?.value.length === 3
          ) {
            setIsVisible(false);
          }
        }}
        className="button"
      >
        Confirm
      </button>
    </div>
  );
}

export default InputCard;

export {};
