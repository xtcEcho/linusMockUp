import React from 'react'
import './SingleSetting.css'

class SingleSetting extends React.Component {
    render(){
        let button
        const name = this.props.settingName
        if (this.props.type === 'DropDown'){
            button = <button>Dropdown</button>
        }else {
            const isOn = this.props.settingStates[this.props.settingName]
            
            button = <button onClick={name => this.props.handleToggle(name)}>{isOn? 'ON':'OFF'}</button>
        }
        return(
            <div className="SingleSetting">
                <h3>{this.props.settingName}</h3>
                <p>{this.props.description}</p>
                {button}
                {/* <button>{this.props.type}</button> */}
            </div>
        )
    }
}

export default SingleSetting