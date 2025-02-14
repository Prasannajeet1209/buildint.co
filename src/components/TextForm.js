import React, {useState}from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
   
    const [text, settext] = useState("Enter your text");
    
    const handleUpEvent=()=>{
       let newText=text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleDownEvent=()=>{
        let newText=text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    
    
    const changeText=(event)=>{
        console.log("on change");
        settext(event.target.value);

    }
   
    const handleDeleteEvent=()=>{
        if (window.confirm("Are you sure you want to delete?"))
            {
                let newText=("");
               settext(newText);
               props.showAlert("Text Deleted","danger"); 
            }    
    }


     const handleSubmit = (event) => {
           event.preventDefault();
           alert('Form submitted!');
           props.showAlert("Data Stored Successfully!!","success");
         };

 const removespace=()=>{
           let textread=text.split(/[ ] +/);
            settext(textread.join(" "));
        };

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'} }>
     
           <h2>{props.heading}</h2>
           <div className="mb-3">
           <textarea name="mybox" id="1" rows="15" cols="170" value={text} onChange={changeText} style={{backgroundColor:props.mode==='dark'?'white':'grey', color:props.mode==='dark'?'black':'white'}}></textarea> 
           </div>
           <button type="submit" className="btn btn-primary me-3"   onClick={handleUpEvent} >Convert to UpperCase</button>
           <button type="submit" className="btn btn-warning me-3" onClick={handleDownEvent}>Convert to LowerCase</button>
           <button type="submit" className="btn btn-secondary me-3" onClick={removespace}>Remove Space</button>
           <button type="submit" className="btn btn-danger me-3" onClick={handleDeleteEvent}>Delete Text</button>
           <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
     </div>

     <div className='container' style={{color:props.mode==='dark'?'white':'black'} }>
     <h2>Total Number of Words and Number is your Text Input</h2>
     <p>Words:{text.trim().split(/\s+/).length} Charater: {text.length}</p>
     <pre >Time needed for Read above text is {0.008*text.split(" ").length}</pre>
     </div>
    </>
    
  )
}

TextForm.propTypes = {
    heading: PropTypes.string,
    mode: PropTypes.string,
    showAlert: PropTypes.func,
  };