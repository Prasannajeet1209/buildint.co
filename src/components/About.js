import React, { useState } from 'react'

export default function About() {

     
    const [mystyle, setstyle]=useState(  {
        color:'white',
        backgroundColor:'black',
        border:'2px solid white'
     })
     const [buttonstyle, setbuttonstyle]=useState("Dark Mode")
     const changeStyle = () => {
        if (mystyle.color === 'white') {
            setstyle({
                color: 'black',
                backgroundColor: 'white',
                border:'2px solid white'
            });
            setbuttonstyle("Dark Mode");
        } else {
            setstyle({
                color: 'white',
                backgroundColor: 'black',
                border:'2px solid white'
            });
            setbuttonstyle("Light Mode");
        }
    };
    
    

  return (
    <div className='container my-5' style={mystyle}>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={mystyle} >
  <div className="col" style={mystyle}>
    <div className="card h-100" style={mystyle}>
      <img src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col" style={mystyle}>
    <div className="card h-100" style={mystyle}>
      <img src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col" style={mystyle}>
    <div className="card h-100" style={mystyle}>
    <img src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
     </div>
     </div>
</div>
<button onClick={changeStyle} type='button' className='btn btn-dark my-3'>{buttonstyle}</button>
    </div>
  )
}
