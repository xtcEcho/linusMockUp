import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const SettingInfo = [
    {
      name:"Account Settings",
      settingDetail:[
        {
          settingName:"Default Currency",
          description:"This is the default currency that all of your coluations will be translated to.",
          default:"USD",
          type: "DropDown"
        },
        {
            settingName:"Accounting Methodology",
            description:"This is the methodology in which your tax and accounting documentation will be prepared.",
            default:"FIFO",
            type: "DropDown"
        }]
    },
    {
      name:"Notification Settings",
      settingDetail:[
        {
          settingName:"SMS Notifications",
          description:"We will push all notifications to your mobile devices.",
          default:true,
          type: "toggle"
        },
        {
            settingName:"Email Notifications",
            description:"Your email and phone number wil not be searchable.",
            default:true,
            type: "toggle"
        }]
    },
    {
        name:"Privacy Settings",
        settingDetail:[
          {
            settingName:"Make Profile Private",
            description:"Your profile with your wallet info will not be public or searchable",
            default:true,
            type: "toggle"
          },
          {
              settingName:"Search Privacy",
              description:"This is the methodology in which your tax and accounting documentation will be prepared.",
              default:false,
              type: "toggle"
          }]
      }
  ]

ReactDOM.render(<App settingInfo={SettingInfo}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

