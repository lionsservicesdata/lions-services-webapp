import React from 'react'
import "./InputField.scss"

export const InputField = ({id, label}) => {
	return (
		<div>
			<label>{label}</label>
			<br/>
			<input type="text" id={id} name={id}/>
			<br/>
		</div>
	)
}
