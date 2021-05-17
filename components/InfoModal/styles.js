import styled, { css } from 'styled-components';
import { button, PRIMARY_COLOR } from '../../theme/theme';

export const Container = styled.div`
`;

export const Text = styled.h2`
	text-align: center;
	margin: 10px 0;
`;

export const IconDiv = styled.div`
	font-size: 100px;
	${props => !props.isError ?
		css`
		color: ${PRIMARY_COLOR};
	` :
		css`
		color: #E6565C;
	`
	}
`;

export const Button = styled.a`
	${button};
	margin: 20px auto;
	display: block;
	width: 200px;

	@media screen and (max-width: 600px) {
		margin: 10px auto;
		width: auto;
	}

	${props => props.tablet ?
		css`
		display: flex;
		@media screen and (max-width: 768px) and (min-width: 600px) {
			display: none;
		}
		`: null};
`;