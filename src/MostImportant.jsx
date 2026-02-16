import { React } from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import happyBoy from "./assets/happyBoy.gif";
import sadBoy from "./assets/sadBoy.gif";
import loverBoy from "./assets/loverBoy.gif";
import couple from "./assets/coupleImg.png";
function MostImportant() {

    const [password, setPassword] = useState("");
    const [showProposal, setShowProposal] = useState(false);
    const [herAns, setHerAns] = useState("");
    const handlePassword = (evt) => {
        setPassword(evt.target.value);
    }

    const handleAns = (ans) => {
        setHerAns(ans);
    }

    useEffect(()=> {
        if(password.trim().toLowerCase()=== "baby") {
            setShowProposal(true);
        }
    },[password]);

    return (
        <div className='flex justify-center items-center flex-col gap-2 mostImp'>
            <p className='text-2xl'> {!showProposal ? "🔐 Enter password, honey 💜✨"
            :"Will you be my Valentine? 💌🐰💜? "}</p>
            <img src={!showProposal ? happyBoy:couple} className='mostImpImage'/>
        {!showProposal ? 
        <>
            <Form.Control
                type="text"
                value={password}
                onChange={handlePassword}
                className='mostImpTextField'
                placeholder='Enter the password here my love'
            />

            <p className='text-red-500'>
                💡 Hint! A 4 letter word that you find cheesy 😝 and I love calling you 💕
            </p>
            </> :
            <div className='flex flex-col gap-4'> 
            <div className='flex gap-3.5'>
              <Button className='mostImpBtns' onClick={()=>handleAns("Yes")}>Yes</Button>
              <Button className='mostImpBtns' onClick={()=>handleAns("No")}>No</Button> 
              </div>
              <div>
                { herAns.length>0 ? (herAns === "Yes" ? <img src={loverBoy} className='gif-dimensions'/>:<img src={sadBoy} className='gif-dimensions'/>):null}
                </div>
             </div>   
            }
            
        </div>

    )
}

export default MostImportant;