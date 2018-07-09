import styled from 'styled-components'
import { media } from '../../constants.js'

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 60px 0;
	color: black;
	z-index: 10;
	width: 30%;
	max-width: 265px;
	min-width: 160px;

	.header-my-name {
		text-align: left;
		padding: 20px 25px 20px 20px;
		font-size: 40px;
		line-height: 40px;
		font-weight: bold;
		z-index: 10;
		text-align: center;
		color: #fff;
		background: #000;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
		pointer-events: all;
		cursor: pointer;
	}

	.header-nav {
		padding-left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		z-index: 10;
		width: 160px;
	}

	.header-nav-item {
		pointer-events: all;
		padding-left: 20px;
		list-style: none;
		font-size: 20px;
		line-height: 48px;
		color: #fff;
		background: #000;
		text-transform: uppercase;
		margin-bottom: 6px;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
		width: 100%;
		text-align: left;
		cursor: pointer;
	}

	@media ${media.PHONE} {
		position: absolute;
		width: 100%;
		max-width: 100%;
		top: 0;
		left: 0;
		right: 0;
		padding: 0;
		flex-wrap: wrap;
		flex-direction: row;
		background-color: #fff;

		.header-my-name,
		.header-nav {
			flex: 1 1 100%;
		}

		.header-nav,
		.header-nav-item:last-of-type {
			margin-bottom: 0;
		}

		.header-nav-item {
			text-align: center;
		}
	}
`
