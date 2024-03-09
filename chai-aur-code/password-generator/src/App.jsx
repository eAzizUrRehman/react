import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let tempPassword = "";
    let allChars = "";
    let allLowercase = "abcdefghijklmnopqrstuvwxyz";
    let allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allNumbers = "0123456789";
    let allSymbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (lowerCase) allChars += allLowercase;
    if (upperCase) allChars += allUpperCase;
    if (numbers) allChars += allNumbers;
    if (symbols) allChars += allSymbols;

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * allChars.length);
      tempPassword += allChars.charAt(charIndex);
    }
    setPassword(tempPassword);
  }, [length, lowerCase, upperCase, numbers, symbols, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, lowerCase, upperCase, numbers, symbols, passwordGenerator]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white shadow ">
      <div className="w-full max-w-lg rounded-lg bg-gray-800 px-10 py-5">
        <h1 className="text-3xl font-bold  ">Password Generator</h1>
        <input
          type="text"
          className="mt-5  w-full rounded-md px-3 py-1 text-white font-semibold outline-none bg-orange-500 hover:bg-orange-400 placeholder:text-white placeholder:text-opacity-60 tracking-wide"
          placeholder="Password..."
          value={password}

          readOnly
        />
        <div className="my-5 flex items-center justify-center gap-5">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className=" w-full cursor-pointer accent-orange-500 hover:bg-orange-400 "
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="w-20 shrink-0  ">
            Length: <span className="font-bold">{length}</span>
          </label>
        </div>
        <div className="flex justify-between gap-5">
          <div className="my-5 flex w-fit items-center justify-center gap-2  ">
            <input
              type="checkbox"
              defaultChecked={lowerCase}
              id="lowerCaseInput"
              disabled={!upperCase && !numbers && !symbols}
              className=" w-full cursor-pointer accent-orange-500 hover:bg-orange-400 "
              onChange={() => {
                setLowerCase((prev) => !prev
                );
              }}
            />
            <label htmlFor="lowerCaseInput" className="shrink-0    ">
              Lowercase
            </label>
            <input
              type="checkbox"
              defaultChecked={upperCase}
              id="upperCaseInput"
              disabled={!lowerCase && !numbers && !symbols}
              className=" w-full cursor-pointer accent-orange-500 hover:bg-orange-400 "
              onChange={() => {
                setUpperCase((prev) => !prev);
              }}
            />
            <label htmlFor="upperCaseInput" className="shrink-0    ">
              Uppercase
            </label>
          </div>
          <div className="my-5 flex w-fit items-center justify-center gap-2  ">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numbersInput"
              disabled={!lowerCase && !upperCase && !symbols}
              className=" w-full cursor-pointer accent-orange-500 hover:bg-orange-400 "
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numbersInput" className="shrink-0    ">
              Numbers
            </label>
          </div>
          <div className="my-5 flex w-fit items-center justify-center gap-2  ">
            <input
              type="checkbox"
              defaultChecked={symbols}
              id="symbolsInput"
              disabled={!lowerCase && !upperCase && !numbers}
              className=" w-full cursor-pointer   accent-orange-500 hover:bg-orange-400  "
              onChange={() => {
                setSymbols((prev) => !prev);
              }}
            />
            <label htmlFor="symbolsInput" className="shrink-0    ">
              Symbols
            </label>
          </div>
        </div>

        <button
          className="rounded border-none  bg-gray-900 px-2 py-1 font-semibold outline-none"
          onClick={passwordGenerator}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
