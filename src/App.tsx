import { useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard";
import InputCard from "./components/InputCard";
import ThankYou from "./components/ThankYou";

function App() {
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueNumber, setInputValueNumber] = useState("");
  const [inputValueMonth, setInputValueMonth] = useState("");
  const [inputValueYear, setInputValueYear] = useState("");
  const [inputValueCvc, setInputValueCvc] = useState("");
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="App">
      <div className="main-card">
        <MainCard 
          inputValueName={inputValueName}
          inputValueNumber={inputValueNumber}
          inputValueMonth={inputValueMonth}
          inputValueYear={inputValueYear}
          inputValueCvc={inputValueCvc}
        />
        {isVisible ? <InputCard 
        inputValueName={inputValueName}
        inputValueNumber={inputValueNumber}
        inputValueMonth={inputValueMonth}
        inputValueYear={inputValueYear}
        inputValueCvc={inputValueCvc}
        setInputValueName ={setInputValueName}
        setInputValueNumber={setInputValueNumber}
        setInputValueMonth={setInputValueMonth}
        setInputValueYear={setInputValueYear}
        setInputValueCvc={setInputValueCvc}
        setIsVisible={setIsVisible}
        />
        :
        <ThankYou setIsVisible={setIsVisible} />

      }
      </div>
    </div>
  );
}

export default App;

export {}
