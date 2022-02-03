import React from "react";
import { getSubscriptions, editSubscription } from "../../Services/utilities";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditSubs({ selectedSub }) {
  const [subToEdit, setSubToEdit] = useState([]);
  const [subEditName, setSubEditName] = useState("");
  const [subEditDate, setSubEditDate] = useState("");
  const [subEditMonthlyCost, setSubEditMonthlyCost] = useState("");
  const [subEditWebsite, setSubEditWebsite] = useState("");
  const [filteredSubs, setFilteredSubs] = useState({})
  const [subscriptionEdit, setSubscriptionEdit] = useState({
    MonthlyCost: '',
    SubName: '',
    SubDate: '',
    Website: ''
  })

  // const navigate = useNavigate()



  // console.log(selectedSub);
  useEffect(() => {
    const grabSubscriptions = async () => {
      //api call all subscriptions
      const res = await getSubscriptions();
      const filterSubs = res.filter((sub) => {
        console.log(sub);
        return sub.id === selectedSub; //filter through all of them that have sub.id value same as selectedSub
      });
      setFilteredSubs(filterSubs)
      console.log(res);
      // console.log(selectedSub)
      console.log(filterSubs);
      // setSubToEdit(filterSubs);
    };
    grabSubscriptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await editSubscription(selectedSub, subscriptionEdit)
    // navigate('/Subscriptions')
}
  // selectedsub = id of object

  const handleChange = (e) => {
    const { name, value } = e.target
    setSubscriptionEdit({
      ...subscriptionEdit, 
      [name]: value 
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="sign-up-form">
        <input
          name="SubName"
          className="Edit-field"
          type="text"
          value={filteredSubs.SubName}
          onChange={handleChange}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="Subscription Name"
        />
        <input
          name="SubDate"
          className="Edit-field"
          type="text"
          value={filteredSubs.SubDate}
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="Date Subscribed"
        />
        <input
          name="MonthlyCost"
          className="Edit-field"
          type="text"
          value={filteredSubs.MonthlyCost}
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="Monthly Cost"
        />
        <input
          name="Website"
          className="Edit-field"
          type="text"
          value={filteredSubs.Website}
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="Website"
        />
        <button
          className="form-fields"
          id="create-account-button"
          type="submit"
        > EDIT THIS SUBSCRIPTION </button>
      </form>
    </>
  );
}
