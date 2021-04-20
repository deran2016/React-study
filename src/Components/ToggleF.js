import { useState } from 'react';

function ToggleF() {
    const [isToggle, setIsToggle] = useState(true);

    const toggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <input
            type="button"
            value={isToggle ? "ON" : "OFF"}
            onClick={toggle}
        >
        </input>
    );
}

export default ToggleF;