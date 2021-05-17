import React from 'react';

import { Text, IconDiv, Button } from './styles.js';

import { Modal } from './../Modal/Modal';

export const InfoModal = ({ text, onClick, isError }) => (
	<Modal isError={!!isError}>
		<IconDiv isError={!!isError}>
			{!isError ? <i className="fa fa-check-square" /> : <i className="fa fa-times" />}
		</IconDiv>
		<Text>{text}</Text>
		<Button onClick={onClick}>Aceptar</Button>
	</Modal>
);
