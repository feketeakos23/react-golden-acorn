import React from 'react';

import PropTypes from 'prop-types';

const Button = (props) => (
    <button onClick={props.func}>
        {props.str}
    </button>
);

export default Button