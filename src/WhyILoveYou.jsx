import React from "react";

function WhyILoveYou() {

    const whyILoveYouData = [
        {
            emoji: "❤️",
            title: "Because your smile",
            text: "fixes my worst days."
        },
        {
            emoji: "🌙",
            title: "Because you feel like home",
            text: "warm and safe."
        },
        {
            emoji: "💪",
            title: "Because you believe in me",
            text: "more than I believe in myself."
        },
        {
            emoji: "😂",
            title: "Because you’re my cuteness",
            text: "even when you’re mad."
        },
        {
            emoji: "🕊️",
            title: "Because you are my peace",
            text: "and my calm."
        },
        {
            emoji: "😈",
            title: "Because you’re my chaos too",
            text: "sweet with a pinch of spice."
        },
        {
            emoji: "💡",
            title: "Because you get me",
            text: "in ways nobody else does."
        },
        {
            emoji: "☁️",
            title: "Because even silence",
            text: "with you is loud."
        },
        {
            emoji: "🧿",
            title: "Because you, always",
            text: "no reason needed."
        }
    ];

    return (
        <div className="flex flex-col gap-12 items-center justify-center adjusting-whyILoveYou-dimensions">
            <h2 className="text-2xl font-bold text-purple-700">The Reason is... 💜 </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {whyILoveYouData.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover-effect"> 
                        <div className="text-4xl mb-2">{item.emoji}</div>
                        <h3 className="text-xl font-semibold text-purple-700 title-animation">{item.title}</h3>
                        <p className="text-gray-600 text-animation">{item.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
    export default WhyILoveYou;