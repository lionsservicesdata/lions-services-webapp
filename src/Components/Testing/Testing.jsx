import { Navbar } from '../Common/Navbar/Navbar';
import React from 'react'
import { InputField } from '../Common/InputField/InputField';
import { useState, useEffect } from 'react';
import { axiosGet } from '../../Util/API';
import MaterialTable from "@material-table/core";

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
  const DEMO_DATA = [
    { id: 2, name: "Joe" },
    { id: 1, name: "Mary" },
  ];
  const DEMO_COLS = [
    { field: "id", title: "Id" },
    { field: "name", title: "Name" },
  ];

  return (
    <div className='testingPage'>
      <Navbar></Navbar>
      <form>
        <InputField id={'fname'} label='First Name' />
        <InputField id={'lname'} label='Last Name' />
        <InputField id={'testing_ident'} label={'hello'} />
        <input type="submit" value="Submit" onClick={(e) => { logchild(e) }} />
        <input type="file" />
      </form>
      <MaterialTable
        data={DEMO_DATA}
        columns={DEMO_COLS}
      />


    </div>
  )
}
