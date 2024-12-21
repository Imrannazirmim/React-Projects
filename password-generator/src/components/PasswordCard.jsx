import { useCallback, useEffect, useRef, useState } from "react";

export const PasswordCard = () => {
  const [length, setLength] = useState("8");
  const [numberAdd, setNumberAdd] = useState(false);
  const [charAdd, setCharAdd] = useState(false);
  const [passwordAdd, setPasswordAdd] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz";
    if (numberAdd) str += "0123456789";
    if (charAdd) str += "~!@#$%^&*(){}[]?`";

    for (let i = 1; i <= length; i++) {
      const charRandom = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(charRandom);
      setPasswordAdd(password);
    }
  }, [length, numberAdd, charAdd, setPasswordAdd]);

  const passwordRef = useRef(null);

  const handlePasswordCopy = useCallback(() => {
    window.navigator.clipboard.writeText(passwordAdd);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
  }, [passwordAdd]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAdd, charAdd, passwordGenerator]);

  return (
    <div className="w-full max-w-3xl bg-slate-600 mx-auto p-3 m-3 rounded text-white">
      <h2 className="text-3xl text-center mb-2">Password Generator</h2>
      <div className="w-[30rem] mx-auto bg-slate-800 rounded p-2 m-2">
        <div>
          <input
            type="text"
            className="w-[23rem] py-1 px-2 rounded m-2 text-amber-600 font-semibold"
            value={passwordAdd}
            ref={passwordRef}
            readOnly
          />
          <button
            className="px-4 py-1 bg-slate-600 rounded text-white active:bg-slate-500"
            onClick={handlePasswordCopy}
          >
            copy
          </button>
        </div>
        <div className=" flex justify-center gap-2 flex-col mx-3">
          <div className="flex justify-center items-center gap-1">
            <input
              type="range"
              min={8}
              max={100}
              onChange={(event) => setLength(event.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div>
            <input
              defaultChecked={numberAdd}
              type="checkbox"
              onChange={() => {
                setNumberAdd((prev) => !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input
              defaultChecked={charAdd}
              type="checkbox"
              onChange={() => {
                setCharAdd((prev) => !prev);
              }}
            />
            <label htmlFor="charecter">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};
