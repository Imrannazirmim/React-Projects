import { useId } from "react";

export const Input = ({
  label,
  amount,
  onCurrencyChange,
  onAmountChange,
  selectCurrency,
  currencyOptions = [],
}) => {
  const amountId = useId();

  return (
    <div>
      <div className=" w-2/3 mx-auto p-3 mt-6 flex justify-center  gap-2 bg-slate-200 flex-col rounded ">
        <div className="p-2 m-2">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor={amountId}>{label}</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                className="w-[8rem] p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor={amountId}>{label}</label>
              <select
                name=""
                id=""
                className="p-2 border shadow rounded"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
              >
                {currencyOptions.map((currencyItem) => (
                  <option value={currencyItem} key={currencyItem}>
                    {currencyItem}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
