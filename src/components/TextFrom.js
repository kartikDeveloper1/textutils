import React,{useState} from 'react'
//import PropTypes from 'prop-types'


export default function TextFrom(props) {
    const[text,setText]=useState('Enter Text Here');
    const HandleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const HandleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const HandleClearClick=()=>{
        let newText=""
        setText(newText);
    }
    const HandleCopy=()=>{
       let newtext= document.getElementById("myBox");
       newtext.select();
       navigator.clipboard.writeText(newtext.value);
    }
    const RemoveExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const HandleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
    <>
    <div className="container">
        <h3 className={`text-${props.mode==='light'?'dark':'light'}` }>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div>
            <button className="btn btn-primary mx-1 my-1" onClick={HandleUpClick} >Convert To UpperCase</button>
            <button className="btn btn-success mx-1 my-1" onClick={HandleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={HandleClearClick}>Clear</button>
            <button className="btn btn-warning mx-1 my-1" onClick={HandleCopy}>Copy Text</button>
            <button className='btn btn-info mx-1 my-1' onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3">
        <h3 className={`text-${props.mode==='light'?'dark':'light'}` }>Your Text Summary</h3>
        <p className={`text-${props.mode==='light'?'dark':'light'}` }>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
    </>
    )
}

