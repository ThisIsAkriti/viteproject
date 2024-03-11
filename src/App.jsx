import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink")
  return (
    <>
      <div className="w-full h-screen duration-200 justify-center font-bold  items-center flex border-2" style={{backgroundColor: color}}>
        <div className="font-sans font-bold text-2xl text-white">Life is art. Live yours in color. Be colorful</div>
        <div className=" flex flex-wrap justify-center fixed bottom-8 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white gap-3 shadow-lg rounded-full px-4 py-3">
            <button
             onClick={() => setColor("red")}
             className="Outline-none px-3 py-2 rounded-xl text-white font-bold " style={{backgroundColor: "red"}}>
              Red
            </button>
            <button
             onClick={() => setColor("Blue")} 
            className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Blue"}}>
              Blue
            </button>
            <button 
             onClick={() => setColor("Tan")}
            className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Tan"}}>
              Tan
            </button>
            <button 
             onClick={() => setColor("Green")}
            className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Green"}}>
              Green
            </button>
            <button 
             onClick={() => setColor("Cyan")}
            className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Cyan"}}>
              Cyan
            </button>
            <button
             onClick={() => setColor("Magenta")}
             className="outline-none px-3 rounded-xl text-white font-bold bg-slate-600" style={{backgroundColor: "Magenta"}}>
            Magenta
            </button>
            <button
             onClick={() => setColor("Gray")}
             className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Gray"}}>
              Gray
            </button>
            <button 
             onClick={() => setColor("Black")}
            className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Black"}}>
              Black
            </button> 
            <button
             onClick={() => setColor("Gold")}
             className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Gold"}}>
              Gold
            </button>
            <button
             onClick={() => setColor("Violet")}
             className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Violet"}}>
              Violet
            </button>
            <button
             onClick={() => setColor("Silver")}
             className="Outline-none px-3 rounded-xl text-white font-bold " style={{backgroundColor: "Silver"}}>
              Silver
            </button>
           

          </div>
        </div>
      </div>
    </>
  )

}

export default App;
