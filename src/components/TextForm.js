import React, {useState} from 'react'
export default function TextForm(props) {
    const handeleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);   
        props.showAlert("Converted to Uppercase", "success");
    }

    const handeleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");   
    }

    const handeleClearClick = () => {
        let newText = ("");
        setText(newText);   
        props.showAlert("Cleared text", "success");
    }
    const handeleInvertClick = () => {
         let str = text.split("");
         str = str.reverse();
         let newText = str.join("");
         setText(newText);

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text,setText] = useState('');
    // text = "new text"; //Wrong way to change the text
    // setText("new text"); //Wrong way to change the text
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary  mx-2" onClick={handeleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handeleDownClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handeleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handeleInvertClick}>InvertWords</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text summary</h1>
        {/* Logic to find the number of words and characters */}

        <p>{text.split("/\s+/").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div> 
    </>
  )
}
