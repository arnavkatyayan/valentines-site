import React from "react";
import Typewriter from "typewriter-effect";

function HomePage() {
    return (
        <div className="flex justify-center items-center home-placement">
            <div className="text-6xl"> 
                <Typewriter
                    options={{
                        strings: [
                            "Heyy Tanya! This is your Valentine's Day gift 💜",
                            "A small piece of code, but filled with all my love for you.",
                            "Every line here has a memory, a smile, and a little bit of us.",
                            "From random laughs to quiet moments, you’ve made everything brighter.",
                            "This is my way of saying thank you… for being my safe place.",
                            "I hope this makes you smile the way you make me smile every day.",
                            "Welcome to our little world, Tanya 🌸",
                            "Let’s keep building beautiful memories together… forever."
                        ],

                        autoStart: true,
                        loop: true,
                        pauseFor: 500,
                        delay: 65,
                        deleteSpeed: 5,   
                    }}
                />
               
            
            </div>
        </div>
    );
}

export default HomePage;
