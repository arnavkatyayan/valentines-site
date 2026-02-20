import React from 'react'
import memoriesImg1 from './assets/memoriesImg1.jpeg';
import memoriesImg2 from './assets/memoriesImg2.jpeg';
import memoriesImg3 from './assets/memoriesImg3.jpeg';
import memoriesImg4 from './assets/memoriesImg4.jpeg';
import memoriesImg5 from './assets/memoriesImg5.jpeg';
import memoriesImg6 from './assets/memoriesImg6.jpeg';
import memoriesImg7 from './assets/memoriesImg7.jpeg';
import memoriesImg8 from './assets/memoriesImg8.jpeg';
import memoriesImg9 from './assets/memoriesImg9.jpeg';
import memoriesImg10 from './assets/memoriesImg10.jpeg';
import memoriesImg11 from './assets/memoriesImg11.jpeg';
import memoriesImg12 from './assets/memoriesImg12.jpeg';
import memoriesImg13 from './assets/memoriesImg13.jpeg';
import memoriesImg14 from './assets/memoriesImg14.jpeg';
import memoriesImg15 from './assets/memoriesImg15.jpeg';
import memoriesImg16 from './assets/memoriesImg16.jpeg';
import memoriesImg17 from './assets/memories17.mp4';
import memoriesImg18 from './assets/memories18.mp4';
import memoriesImg19 from './assets/memories19.mp4';
import {Button} from "react-bootstrap";
import {useState} from "react";
function Memories() {
    const [imageIndex, setImageIndex] = useState(0);    
    const arrayOfMemories = [
  {
    content: "Can't forget our korean cafe date ☕️❤️",
    photo: memoriesImg1,
    video: null
  },
  {
    content: "A wallpaper of us together that I love 😍",
    photo: memoriesImg2,
    video: null
  },
  {
    content: "Manifestation of our love story in the form of an insta story 🥰",
    photo: memoriesImg3,
    video: null
  },
  {
    content: "Ghibli auto ride, one of my favourite memories with you 🥹",
    photo: memoriesImg4,
    video: null
  },
  {
    content: "You make me proud of you everyday, and this is one of those moments 🥹",
    photo: memoriesImg5,
    video: null
  },
  {
    content: "Best moment of the auto ride 🥰",
    photo: memoriesImg6,
    video: null
  },
  {
    content: "Life can't get better than this 🥹",
    photo: memoriesImg7,
    video: null
  },
  {
    content: "Our mall date and first struggle to find our bags 😝",
    photo: memoriesImg8,
    video: null
  },
  {
    content: "Poetry!! one of the most romantic moments we had together 🥹",
    photo: memoriesImg9,
    video: null
  },
  {
    content: "Obsessed with this girl! 🥰",
    photo: memoriesImg10,
    video: null
  },
  {
    content: "Experienced a monument visit with you, one of the most fun days we had together 🥹",
    photo: memoriesImg11,
    video: null
  },
  {
    content: "Aesthetic picture !! 🥰",
    photo: memoriesImg12,
    video: null
  },
  {
    content: "My manifestation finally came true, to hold your hand like that 🥹",
    photo: memoriesImg13,
    video: null
  },
  {
    content: "Tea time with you, one of the most peaceful moments 🥰",
    photo: memoriesImg14,
    video: null
  },
  {
    content: "Ganpati Bappa Morya 🙏🏻",
    photo: memoriesImg15,
    video: null
  },
  {
    content: "Trying this after a long time, and it was so yum!! 🥹",
    photo: memoriesImg16,
    video: null
  },
  {
    content: "My fav girl and her wish to be in a korean cafe, I am happy to be with her 🥹",
    photo: null,
    video: memoriesImg17
  },
  {
    content: "Random lazy day at bookstore 🥹",
    photo: null,
    video: memoriesImg18
  },
  {
    content: "My fav thing is to record videos of us together, and this is one of those moments 🥹",
    photo: null,
    video: memoriesImg19
  },
    
];
        
    const handlePrevious = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? arrayOfMemories.length - 1 : prevIndex - 1));
    }
    const handleNext = () => {
        setImageIndex((prevIndex) => (prevIndex === arrayOfMemories.length - 1 ? 0 : prevIndex + 1));
    }
    return (
        <div className='memories-page flex flex-col items-center justify-center gap-5'>
            <h1 className='memories-heading'>Aranya Moments together 💕</h1>
            {arrayOfMemories[imageIndex].video ? (
              <video src={arrayOfMemories[imageIndex].video} controls className='memories-img'/>
            ) : (
              <img src={arrayOfMemories[imageIndex].photo} alt={arrayOfMemories[imageIndex].content} className='memories-img'/>
            )}
            <h2 className='memories-content'>{arrayOfMemories[imageIndex].content}</h2>
            <div className='flex gap-2.5 items-center justify-center'>
              <Button onClick={()=>handlePrevious()} className='mostImpBtns'>Prev</Button>
              <Button onClick={()=>handleNext()} className='mostImpBtns'>Next</Button>
            </div>
             </div>
    )

}
export default Memories;