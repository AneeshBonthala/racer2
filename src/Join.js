import Background from "./Background.js";
import './styles.css';
import React from 'react';

function Join(props) {
    return (props.show) ? (
        <div className = "join_container">
            {/* <Background></Background> */}
            <p class="start_tracking">Join now!</p>
        </div>
    ) : "";
}

export default Join;