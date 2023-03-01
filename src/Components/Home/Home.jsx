import { Button } from '../Common/Button/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { QrReader } from 'react-qr-reader'
import { useState } from 'react'
import React from 'react'
import "./Home.scss"

export const Home = () => {
	var [data, setData] = useState('test');
	const { variable } = useSelector(state => state.Slice)
	const buttonText = "gotoDetial"
	const titleText = "this is the home page"

	return (
		<div className='homeCont'>
			<Link to={"/Detail"}>
				<Button
					text = { buttonText }
				/>
			</Link>
			<div className='homeBody'>
				<div className='homeTitle'>
					{ titleText }
				</div>
				<div className='homeData'>
					{ variable }
				</div>
				<QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
					console.log(result)
                }    
            }}
            videoStyle = {{height: '75%'}}
            constraints = {{ facingMode: 'environment'}}
            /> 
			<h1>{data}</h1>
			</div>
		</div>
	)
}
