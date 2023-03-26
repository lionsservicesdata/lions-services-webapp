import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import { InputField } from '../Common/InputField/InputField';
import { useState, useEffect } from 'react';
import { axiosGet } from '../../Util/API';
import { SelectField } from '../Common/SelectField/SelectField';
export const Testing = () => {

	const logchild = (event) => {
		event.preventDefault()

		console.log(document.getElementById('testing_ident').value)
	}

	function getSelectEntries(routeName) {
        const [entries, setEntries] = useState([{}]);

        useEffect(() => {
            axiosGet(routeName).then((e) => {
                setEntries(e.data)
            })
                .catch((err) => {
                    console.log(err.message)
                })
        }, [])

        return (entries)
    }

	
	return (
		<div className='testingPage'>
			<Navbar></Navbar>
			<form>
				<InputField id={'fname'} label = 'First Name'/>
				<InputField id={'lname'} label = 'Last Name'/>
				<InputField id={'testing_ident'} label={'hello'} />
				<SelectField label ='testing' options={getSelectEntries('Production_Systems_List')}></SelectField>
				<input type="submit" value="Submit" onClick={(e) => {logchild(e)}}/>
				
			</form>
		</div>
	)
}
