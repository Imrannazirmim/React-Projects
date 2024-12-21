import { Input } from "./components/Input.jsx";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [currencyValue, setCurrencyValue] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
    setAmount(currencyValue);

    setCurrencyValue(amount);
  };
  const convert = () => {
    setCurrencyValue(amount * currencyInfo[to]);
  };
  return (
    <>
      <header>
        <h2 className="text-center text-2xl font-semibold m-2 text-amber-700">
          Currency Converter App
        </h2>
        <p className="p-2 break-words text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quae,
          veniam. A deleniti, distinctio dolore maxime ratione rerum sunt. Quis.
        </p>
      </header>
      <Input
        label="From"
        amount={amount}
        currencyOptions={options}
        selectCurrency={from}
        onCurrencyChange={(currency) => setAmount(currency)}
        onAmountChange={(amount) => setAmount(amount)}
      />
      <div className="text-center">
        <button
          className="text-xl mt-3 px-4 p-2 bg-blue-400 rounded"
          onClick={swapCurrency}
        >
          swap
        </button>
      </div>

      <form
        className="text-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          label="To"
          amount={currencyValue}
          selectCurrency={from}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
        />
        <button
          onClick={convert}
          type={"button"}
          className="text-xl px-4 py-2 mt-4 bg-amber-600 rounded text-white"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  );
};

export default App;
