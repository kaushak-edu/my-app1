import React , { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("enter text");
    const ConvertToUpper=()=>{
        //console.log("uppercase");
        let newtxt=text.toUpperCase();
        setText(newtxt);
    }

    const ConvertToLower=()=>{
       // console.log("lowercase");
        let newtxt=text.toLowerCase();
        setText(newtxt);
    }
    const onChangeText=(event)=>{
        //console.log("onclange");
        setText(event.target.value)
    }
    const Clear=()=>{
         setText("");
    }
  return (
    <>
    <div>
<h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
<div className="mb-3">
   
<textarea className="form-control" onChange={onChangeText} value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
</div>
<button className="btn btn-primary"onClick={ConvertToUpper}>convert to UpperCase</button>
<button  className="btn btn-primary" onClick={ConvertToLower} style={{marginLeft:"10px"}}>convert to LowerCase</button>
<button  className="btn btn-primary mx-2" onClick={Clear}  >clear</button>

</div>

<div className='container my-5' style={{color:props.mode==='light'?'black':'white'}}>
    <h3 style={{marginTop:"10px"}}>text summary</h3>
<h5><span style={{color:"red"}}>{text.split(" ").length}</span> words <span style={{color:"green"}}>{text.length}</span> characters</h5>
</div>
</>
  )
}
