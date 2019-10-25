import React from 'react'
import './Settings.css'
import SettingHeader from '../SettingHeader/SettingHeader'
import SettingMain from '../SettingMain/SettingMain'


class Settings extends React.Component {
    render(){

        return(
            <div className="Settings">
                <SettingHeader />
                <SettingMain settingStates={this.props.settingStates} sections={this.props.sections} />
            </div>
        )
    }
}

export default settings