import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const handlerClick = (value) =>{
        setInput(input + value)
    }

    const handlerCalculate = () =>{
        try{
            if (!input) return;
            setResult(evaluate(input).toString());
        } catch(error){
            setResult("ERROR")
        }
    }
    const handlerClear = () =>{
        setInput("")
        setResult("")
    }

    const handlerDelete = () => setInput((prev) => prev.slice(0, -1))
    return(
        <div className="grid shadow-md w-[360px] text-2x1 font-bold">
            <div className="bg=[#CCD5AE] text-black min-h[180px] grow flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">
                    {input}
                </span>
                <div className="flex justify-between w-full items-center text-5xl">
                    <span>=</span>
                    <span className="flex h-fit">{result}</span>
                </div>
            </div>

            <div className="bg-white grow h-[480px] grid grid-cols-4">
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                 onClick={() => handlerClick("+")}>
                    +
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("7")}>
                    7
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("8")}>
                    8
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("9")}>
                    9
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                 onClick={() => handlerClick("-")}>
                    -
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("4")}>
                    4
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("5")}>
                    5
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("6")}>
                    6
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                 onClick={() => handlerClick("*")}>
                    x
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("1")}>
                    1
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("2")}>
                    2
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("3")}>
                    3
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                 onClick={() => handlerClick("/")}>
                    ÷
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick("0")}>
                    0
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" 
                onClick={() => handlerClick(".")}>
                    .
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] text-sm" 
                onClick={handlerDelete}>
                    DEL
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#FEFAE0]" 
                onClick={handlerClear}>
                    C
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#FEFAE0]" 
                onClick={handlerCalculate}>
                    =
                </button>

            </div>
        </div>
    );
}