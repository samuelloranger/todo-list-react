/**
 * App To-do List pour Git N' Gin
 * @author Samuel Loranger <samuelloranger@gmail.com>
 * @version 1
 */

import React from 'react';

const Button = ({ action, extensionClasse = '', children }) => (
	<button className={'btn ' + extensionClasse} onClick={action} type="text">
		{children}
	</button>
);

export default Button;
