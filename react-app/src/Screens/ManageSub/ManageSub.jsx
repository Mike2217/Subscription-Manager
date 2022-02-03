import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getSubscriptions, deleteSubscriptions } from '../../Services/utilities';


export default function ManageSub({ username, setSelectedSub, selectedSub }) {

  const navigate = useNavigate()
  const [subList, setSubList] = useState([])


  // const navigate = useNavigate()

  console.log(username)
  // const [subNames, setSubNames] = useState([])
  // const [subDate, setSubDate] = useState([])
  // const [subPrice, setSubPrice] = useState([])
  // const [subWebsite, setSubWebsite] = useState([])

  // let subMatch = []
  // let subNames = []
  // let subPrices = []
  // let subDates = []
  // let subWebsite = []

  const handleEdit = (id) => {
    const select = id
    console.log(select)
    setSelectedSub(select)
    console.log(selectedSub)
    navigate('/Edit-Sub')
  }

  const handleDelete = (id) => {
    deleteSubscriptions(id)
  }

  useEffect(() => {
    const grabSubscriptions = async () => {
      const res = await getSubscriptions();
      const filterSubs = res.filter((sub) => {
        return sub.user === username
      })
      // console.log(res);
      setSubList(filterSubs);
    };
    grabSubscriptions();
  }, []);
console.log(subList)
  
  const handleNav = (e) => {
    e.preventDefault()
    navigate('/Add-Subscription')
  }
  
  // subList.forEach((sub) => {
  //   if (sub.user == userID) {
  //     subMatch.push(sub)
      // console.log(subMatch)
      // sub.SubName.push(subNames)
      // sub.MonthlyCost.push(subPrices)
      // sub.SubDate.push(subDates)
      // sub.Website.push(subWebsite)
  //   }
  // })
  
  for (let i = 0; i <= subList.length; i++){
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
        {subList?.map((e, key) => (
            <tr key={key}>
            <td>{e.SubName}</td>
            <td>{e.SubDate}</td>
            <td>{e.MonthlyCost}</td>
            <td>{e.Website}</td>
            <td><button onClick={() => handleEdit(e.id)}>Edit This Subscription</button></td>
            <td><button onClick={() => handleDelete(e.id)}>Delete This Subscription</button></td>
            </tr>
          ))}
          </tbody>
        </table>
        <div id='Add-Subs-Link-Container'>
        <button id='Add-Subs-Link'onClick={handleNav}>Add Subscriptions</button>
        </div>
      </div>
    )
  }


  // return (
  //   <>
  //     <div id='link-container'>
  //       <div id='Add-Subs-Link-Container'>
  //       <button id='Add-Subs-Link'onclick={navigate('/Add-Subscription')}>Add Subscriptions</button>
  //       </div>
  //       <div id='current-subs'>
  //         Current Subscriptions
  //       </div>
  //       <div id='add-sub-container'>
  //       <button onClick={navigate('/Add-Sub')}> Add Subscription </button>
  //     </div>
  //     </div>
  //   </>
  // )
}
