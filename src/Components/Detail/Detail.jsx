import { Button } from '../Common/Button/Button'
import { Link } from 'react-router-dom'
import React from 'react'
import "./Detail.scss"

export const Detail = () => {

	const bodyText = "this is the detail page"
	const buttonText = "back"

	return (
		<div className='detailCont'>
			<Link to={"/"}>
				<Button
					text = { buttonText }
				/>
			</Link>
			<div className='detailBody'>
				{ bodyText }
			</div>
		</div>
	)
}
