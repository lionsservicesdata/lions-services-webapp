import { Button } from '../Common/Button/Button'
import { Link } from 'react-router-dom'
import React from 'react'
import "./Detail.scss"

export const Detail = () => {
	return (
		<div className='detailCont'>
			<Link to={"/"}>
				<Button
					text = {"Home"}
				/>
			</Link>
			<div className='detailBody'>
				{"this is the detail page"}
			</div>
		</div>
	)
}
