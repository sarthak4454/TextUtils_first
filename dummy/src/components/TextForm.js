import React,{useState} from 'react';
const TextForm= (props)=>{

    const ConvertChangeHandler= ()=>{
     let newText=text.toUpperCase();
     setText(newText);
    };
    const ConvertTextHandler=(event)=>{
     setText(event.target.value);
    };
    const ConvertClearChangeHandler= ()=>{
      let newText= '';
      setText(newText);
    }
    const[text,setText]= useState('');
return (
<div>
    <h1>Enter Text Here</h1>
    <div className="my-2">
    <textarea className="form-control" value={text} onChange={ConvertTextHandler} id="myBox" rows="8" > </textarea>
   </div>
   <button className='btn btn-primary mx-1' onClick={ConvertChangeHandler}>convert to upper case</button>

   <button className='btn btn-primary mx-1' onClick={ConvertClearChangeHandler}>Clear Text</button>

</div>
);
};
export default TextForm;