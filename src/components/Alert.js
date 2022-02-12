import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"40px"}}>
    {props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible`}  role="alert">
        <strong>{props.alert.msg}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
