import React from 'react';
import { getSubscriptions, newSubscription } from "../../Services/utilities";
import { useState, useEffect } from "react";

export default function AddSub() {

  const [SubName, setSubName] = useState("");
  const [SubDate, setSubDate] = useState("");
  const [MonthlyCost, setMonthlyCost] = useState(0);
  const [Website, setWebsite] = useState("");
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
      SubName,
      SubDate,
      MonthlyCost,
      Website,
      User: 3
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
          value={SubName}
          // onChange={handleChange}
          onChange={(e) => setSubName(e.target.value)}
          placeholder="Subscription Name"
        />
        <input
          name="SubDate"
          className="Edit-field"
          type="text"
          value={SubDate}
          // onChange={handleChange}
          onChange={(e) => setSubDate(e.target.value)}
          placeholder="Date Subscribed"
        />
        <input
          name="MonthlyCost"
          className="Edit-field"
          type="text"
          value={MonthlyCost}
          // onChange={handleChange}
          onChange={(e) => setMonthlyCost(e.target.value)}
          placeholder="Monthly Cost"
        />
        <input
          name="Website"
          className="Edit-field"
          type="text"
          value={Website}
          // onChange={handleChange}
          onChange={(e) => setWebsite(e.target.value)}
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
