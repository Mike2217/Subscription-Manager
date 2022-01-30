import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getSubscriptions } from '../../Services/utilities';


export default function ManageSub(props) {

  const navigate = useNavigate
  let userID = props.captureUserID
  const [subList, setSubList] = useState([])
  // const [subNames, setSubNames] = useState([])
  // const [subDate, setSubDate] = useState([])
  // const [subPrice, setSubPrice] = useState([])
  // const [subWebsite, setSubWebsite] = useState([])

  let subMatch = []
  let subNames = []
  let subPrices = []
  let subDates = []
  let subWebsite = []

  useEffect(() => {
    const grabSubscriptions = async () => {
      const res = await getSubscriptions();
      console.log(res);
      setSubList(res);
    };
    grabSubscriptions();
  }, []);
console.log(subList)
  
  
  subList.forEach((sub) => {
    if (sub.user == userID) {
      subMatch.push(sub)
      // sub.SubName.push(subNames)
      // sub.MonthlyCost.push(subPrices)
      // sub.SubDate.push(subDates)
      // sub.Website.push(subWebsite)
    }
  })
  
  for (let i = 0; i <= subMatch; i++){
    return (
      <div id='table-container'>
        <table id='sub-table'>
          <thead>
            <tr>
              <th>Subcription</th>
              <th>Subcription Date</th>
              <th>Price Per Month</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
        {subMatch.map((e, key) => (
            <tr key={key}>
            <td>{e.fields.SubName}</td>
            <td>{e.fields.SubDate}</td>
            <td>{e.fields.MonthlyCost}</td>
            <td>{e.fields.Website}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    )
  }


  return (
    <>
      <div id='link-container'>
        <div id='Add-Subs-Link-Container'>
        <div id='Add-Subs-Link'onclick={navigate('/Add-Subscription')}></div>
          Add Subscriptions
        </div>
        <div id='current-subs'>
          Current Subscriptions
        </div>
      </div>
    </>
  )
}
