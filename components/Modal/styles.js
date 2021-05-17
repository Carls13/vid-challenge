import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 500;

	${props => {
		if (props.isError) {
			return css`
				z-index: 1000;
			`;
		}
	}} 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);`;

export const ModalContent = styled.div`
	text-align: center;
	background-color: #fefefe;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
	width: 50%;
	border-radius: 20px;

	${props => {
		if (props.isBig === true) {
			return css`
				width: 90%;
				height: 90vh;
			`;
		}
		if (props.isMedium === true) {
			return css`
				height: 90vh;
			`;
		}
	}} 

	@media screen and (max-width: 600px) {
		width: 90%;
	}`;