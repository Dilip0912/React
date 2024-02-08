import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_({)}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    // passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(
    //   0,5
    // );
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-md px-4 my-8 text-blue-300 bg-slate-200">
        <h1 className="text-black text-center">Password Generator</h1>
        <div
          className='className="flex shadow 
      rounded-lg overflow-hidden mb-4"'
        >
          <input
            type="text"
            value={password}
            className="outline-none w-[70%] py-1 px-3 my-3 rounded-xl"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-orange-300
         text-black px-3 py-0.5 rounded-xl w-20 h-8 relative
          right-4"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>

        <div className="flex  m-4 p-4 gap-x-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-xl">Length:{length} </label>
          </div>

          <div className="flex  text-sm mx-2 gap-x-2">
            <label className="text-xl">Number</label>
            <input
              type="checkbox"
              className="mt-1"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>

          <div className="flex  text-sm mx-2 gap-x-2">
            <label className="text-xl">Character</label>
            <input
              type="checkbox"
              className="mt-1"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
