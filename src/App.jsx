import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import MostImportant from './MostImportant'
function App() {
  const [activeTab, setActiveTab] = useState("home");


  const handleTabChange = (inp) => {
    setActiveTab(inp);
  }
  return (
    <>
    <div className='header'>
        <nav className="flex justify-between items-center">

          <h1 className="text-xl font-bold text-purple-300 header-heading">
            I Love You Tanya Kumar Multani 💜
          </h1>

          <ul className="flex gap-6 text-purple-300 font-semibold nav-list">
            <li className="cursor-pointer hover:text-white transition" onClick={()=>handleTabChange("firstMeeting")}>
              First Meeting 💜
            </li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=>handleTabChange("whyILoveYou")}>
              Why I Love You ?  💜
            </li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=>handleTabChange("futurePlans")}>
              Future Plans 💜
            </li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=> handleTabChange("memories")}>
              Memories 💜
            </li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=> handleTabChange("mostImportant")}>
              Most Important 💜
            </li>
          </ul>

        </nav>
    </div>
    <div className='main-page bg-purple-300'>
    {activeTab === "home" && <HomePage/>}
    {activeTab === "mostImportant" && <MostImportant/>}
    {/* {activeTab==="mostImportant" && } */}
    </div>
    <div className='footer'>
      <div className='flex flex-col'>
      <p className="text-purple-300 font-extrabold py-2">Version : 1.0.0</p>

      <p className="text-purple-300 font-semibold">© 2026 Arnav Katyayan. All rights reserved.</p>
    </div>
    </div>
    </>
  
  );
}

export default App;



