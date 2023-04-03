import React from 'react'
//meaning of this && is if(props.alert is not null then do next )
function alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return ( 
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
    
    
  ) 
}

export default alert
