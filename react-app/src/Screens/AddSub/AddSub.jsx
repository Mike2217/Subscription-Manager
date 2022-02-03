import React from 'react';
import { getSubscriptions, newSubscription } from "../../Services/utilities";
import { useState, useEffect } from "react";

export default function AddSub() {

  const [newSubName, setNewSubName] = useState("");
  const [newSubDate, setNewSubDate] = useState("");
  const [newSubMonthlyCost, setNewSubMonthlyCost] = useState(0);
  const [newSubWebsite, setNewSubWebsite] = useState("");
  // const [newSub, setNewSub] = useState({
  //   MonthlyCost: '',
  //   SubName: '',
  //   SubDate: '',
  //   Website: ''
  // })

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await newSubscription()
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setNewSub({
  //     ...newSub,
  //     [name]: value
  //   })
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubscriptionData = {
      newSubName,
      newSubDate,
      newSubMonthlyCost,
      newSubWebsite,
    };
    await newSubscription(newSubscriptionData);
  };


  return (
    <>
      <form onSubmit={handleSubmit} id="sign-up-form">
        <input
          name="SubName"
          className="Edit-field"
          type="text"
          value={newSubName}
          // onChange={handleChange}
          onChange={(e) => setNewSubName(e.target.value)}
          placeholder="Subscription Name"
        />
        <input
          name="SubDate"
          className="Edit-field"
          type="text"
          value={newSubDate}
          // onChange={handleChange}
          onChange={(e) => setNewSubDate(e.target.value)}
          placeholder="Date Subscribed"
        />
        <input
          name="MonthlyCost"
          className="Edit-field"
          type="text"
          value={newSubMonthlyCost}
          // onChange={handleChange}
          onChange={(e) => setNewSubMonthlyCost(e.target.value)}
          placeholder="Monthly Cost"
        />
        <input
          name="Website"
          className="Edit-field"
          type="text"
          value={newSubWebsite}
          // onChange={handleChange}
          onChange={(e) => setNewSubWebsite(e.target.value)}
          placeholder="Website"
        />
        <button
          className="form-fields"
          id="create-account-button"
          type="submit"
        > Add New Subscription </button>
      </form>
  </>
  );
}
