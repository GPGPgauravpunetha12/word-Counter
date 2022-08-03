import React ,{useState} from 'react'

export default function TextForm(props) { 
   
    const handleupclick = ()=>{
        // console.log("uppercase was clicked");
        // setText("u have  click on handleupclick");
        let upcase=text.toUpperCase();
        setText(upcase);
    }
   
    const  handlelolick = ()=>{
        let locase=text.toLowerCase();
        setText(locase);
    }
    const handleupchange = (event)=>{
        // console.log("on change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // state and hooks concept cant asign text="kfjefkd" only can do setText("nedw txt")
    return (      
       <>
        <div>
            
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control " onChange={handleupchange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2"onClick={handleupclick} >Convert to uppercase</button>

<button className="btn btn-primary"onClick={handlelolick} >Convert to lowercase</button> 
<div className='container my-3'>
            <h4>Content summary</h4>
            <p >{text.split(" ").length-1}  words {text.length}  no of characters</p>
            <p>{0.008*text.split("").length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text}</p>
            </div>
        </div>
        </>
    )
}
