import React from 'react'

import { useEffect, useState } from 'react'
import { axiosGet } from '../../../Util/API';


export default function DisplayTable({ tableName }) {

    const getHeader = (data) => {
        return Object.keys(data[0]);
      }

    function getTable() {
        const [table, setTable] = useState([{}]);

        useEffect(() => {
            axiosGet(tableName).then((e) => {
                setTable(e.data)
            })
                .catch((err) => {
                    console.log(err.message)
                })
        }, [])

        return (table)
    }

    var table = getTable()
    var header = getHeader(table)
    var tableData = table
    console.log(table.length)

    return (

        <table>
            <thead>
                <tr>
                    {header.map(heading => {
                        return <th key={heading}>{heading}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => {
                    return <tr key={index}>
                        {header.map((key, index) => {
                            return <td key={row[key]}>{row[key]}</td>
                        })}
                    </tr>;
                })}
            </tbody>
        </table>
    )
}