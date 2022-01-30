import React from 'react';
import { useNavigate } from 'react-router-dom'


export default function ManageSub() {

  const navigate = useNavigate


  return (
    <>
      <div id='link-container'>
        <div id='Add-Subs-Link-Container'>
        <div id='Add-Subs-Link'onclick={navigate('/Add-Subscription')}></div>
          Add Subscriptions
        </div>
        <div id='current-subs'>
          Current Subscriptions
          <table>
            
          </table>
        </div>
      </div>
    </>
  )
}
