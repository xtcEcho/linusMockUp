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
      settings:
      {DefCurrency:"USD",
      AccMeth:"FIFO",
      SMSNotification: true,
      EmailNotification: true,
      ProfilePrivate: true,
      SearchPrivate:false,
      Theme:"The Purps"}
    };
  }
  render() {
    return (
      <div className="App">
        <SideNav />
        <Settings settingStates={this.state.settings} sections={this.props.settingInfo}/>
      </div>
    );
  }
}

export default App;
