import {React,useEffect,useState} from 'react';
import TanyaSolo1 from "./assets/FirstMeeting01.jpeg";
import TanyaSolo2 from "./assets/FirstMeeting02.jpeg";
import TanyaSolo3 from "./assets/FirstMeeting03.jpeg";
import Typewriter from "typewriter-effect";
function FirstMeeting() {

    return(
        // <div>
        // <h1>Hello from firstMeeting</h1>
        // <img src={TanyaSolo1}/>
        // </div>
        <div className='flex gap-6 items-center justify-center first-meeting-dimensions'>
            <div className='flex flex-col gap-2.5'>
                {/* <img src={TanyaSolo1} className='first-meeting-imgs'/> */}
                <img src={TanyaSolo2} className='first-meeting-imgs'/>
                <img src={TanyaSolo3} className='first-meeting-img2'/>
            </div>
            <div className="first-meeting-desc">
            <h2 className="text-black text-3xl">7th November 2022 — Delhi Airport ✈️</h2>

<p>She came from Vrindavan, with temple bells still echoing in her steps 🔔, a little tired from wandering Delhi’s streets, yet carrying stories in her eyes ✨.</p>

<p>I met her at the airport, where departures usually steal people away, but that day, arrival felt like destiny choosing a gate number 💫.</p>

<p>She was heading back to Pune, suitcase full of clothes 🧳, heart full of places she had explored — Delhi’s chaos, Vrindavan’s calm, and unknowingly… me ❤️.</p>

<p>Among rushing footsteps and flight announcements, time slowed down just enough ⏳ for two strangers to recognize something familiar in each other 🌸.</p>

<p>Her smile felt like a pause button on the world ⏸️, her voice softer than the noise of engines outside. We spoke as if we had met before, somewhere between prayers and promises 🤍🙏.</p>

<p>And when she left, the airport didn’t feel like a building anymore — it felt like a chapter 📖. A beginning written between hello and safe journey 🌷.</p>

<p>She flew to Pune, but something of hers stayed behind… with me, on that evening in Delhi 🌆, where love quietly learned how to board its first flight 💕✈️.</p>

            </div>

        </div>
    )
}
export default FirstMeeting;