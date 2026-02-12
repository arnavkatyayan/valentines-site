import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
    <div className='header'>
        <nav className="flex justify-between items-center">

          <h1 className="text-xl font-bold text-purple-300 header-heading">
            I Love You Tanya Kumar Multani 💜
          </h1>

          <ul className="flex gap-6 text-purple-300 font-semibold nav-list">
            <li className="cursor-pointer hover:text-white transition">
              First Meeting 💜
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Why I Love You 💜
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Future Plans 💜
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Most Important 💜
            </li>
          </ul>

        </nav>
    </div>
    <div className='main-page bg-purple-300'>
    <HomePage/>
    </div>
    <div className='footer'>
      <div>
      <p className="text-purple-300 font-semibold">© 2025 Arnav Katyayan. All rights reserved.</p>
    </div>
    </div>
    </>
  
  );
}

export default App;



