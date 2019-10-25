import React from 'react';
import "./SideNav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SideNav extends React.Component {
    render(){
        return(
            <div className="SideNav">
                <h2>Company Name</h2>
                <ul className="main">
                    <li>Accounts</li>
                    <li>Ledger</li>
                    <li>Finance</li>
                </ul>
                <ul className="other">
                    <li>Learn</li>
                    <li>Marketplace</li>
                </ul>
            </div>
        )
    }
}

export default SideNav