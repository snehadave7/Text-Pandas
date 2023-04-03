
import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleOnChange=(event)=>{
       
        setText(event.target.value)
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Voice enabled!","success");
    }

    const clear=()=>{
        let newText=''
        setText(newText)
        props.showAlert("Cleared text!","success");
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const [text,setText]= useState('')
    //text="new text" wrong way to change the state
    // setText("new text"); correct way
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=2" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=2" onClick={clear}>Clear text</button>
        

    </div>
    <div className="container my-5" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characteres</p>
        <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in the given textbox to preview"}</p>
    </div>
    </>
  )
}
