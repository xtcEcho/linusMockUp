import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SideNav from "./SideNav/SideNav"
import Settings from "./Settings/Settings"

class App extends React.Component {
  //set default setting 
  constructor(props) {
    super(props);
    this.state = {
      "Default Currency":"USD",
      "Accounting Methodology":"FIFO",
      "SMS Notifications": true,
      "Email Notifications": true,
      "Make Profile Private": true,
      "Search Privacy":false,
      Theme:"The Purps"
    };
  }
  updateToggle(settingName){
    this.setState({
      settingName: !this.state.settingName
    })
    console.log(settingName)
  }
    render() {
    return (
      <div className="App">
        <SideNav />
        <Settings settingStates={this.state} sections={this.props.settingInfo} handleToggle={(settingName) => this.updateToggle(settingName)}/>
      </div>
    );
  }
}

export default App;
