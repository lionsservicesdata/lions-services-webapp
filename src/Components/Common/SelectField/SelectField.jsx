import React from 'react'
import "./SelectField.scss"
import { useState, useEffect } from 'react';

export const SelectField = ({label, options}) => {

	return (
		<div>
			<label value={label}>{label}</label>
			<br/>
			<select>
				{options.map(entries => {
					console.log(options)
					return <option key={entries}>{entries}</option>
				})}
			</select>
		</div>
	)
}
