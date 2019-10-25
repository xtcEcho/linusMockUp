import React from 'react'
import './SettingMain.css'
import SettingSection from '../SettingSection/SettingSection'


class SettingMain extends React.Component {

    render(){
        //pass in section info as props
        //pass in the whole settings, not sure if it's useful yet
        const sections = this.props.sections.map(
            section => 
            <SettingSection name={section.name} settingDetail={section.settingDetail} settingStates={this.props.settingStates} />)
        return(
            <div className="SettingMain">
                {sections}
            </div>
        )
    }
    
}

SettingMain.defaultProps = {
    sections: []
  };

export default SettingMain