import React from 'react';
import './switch.css'

export default function Switch(props: any) {
    const isOn = props.on || false;
    const handleToggle = props.handleToggle;
    const onColor = props.onColor ? props.onColor : '#708cd0';

    return (
        <div>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{background: isOn && onColor}}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`}/>
            </label>
        </div>
    );
};

