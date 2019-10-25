import React from 'react'
import './SettingSection.css'
import SingleSetting from '../SingleSetting/SingleSetting'

class SettingSection extends React.Component {
    render(){
        //pass in each setting detail into a single setting component
        const settingLists = this.props.settingDetail.map(
            oneSetting => <SingleSetting {...oneSetting} settingStates={this.props.settingStates} handleToggle={this.props.handleToggle}/>
        )
        return(
            <div className="SettingSection">
                <h3>{this.props.name}</h3>
                {settingLists}
            </div>
        )
    }
}
export default SettingSection