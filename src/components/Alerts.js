import React from 'react'
const cap=(word)=>{
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

}
export default function Alerts(props) {
  return (
    <div>
     { props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong> {cap(props.alert.type)}</strong>: {props.alert.msg}
       
      </div>
     )}
    </div>



  )
}
