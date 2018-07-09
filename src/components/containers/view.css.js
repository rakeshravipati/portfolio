import styled from 'styled-components'
import { media } from '../../constants.js'

export const PageView = styled.section`
	min-height: 100%;
	width: 0;
	z-index: 5;
	background-color: #fff;
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;
	text-align: center;

	.section-wrapper {
		margin-left: 30%;
		margin-bottom: 25px;
		padding-left: 60px;
		padding-right: 60px;
		text-align: left;
		background-color: #fff;
	}

	.about-section {
		margin-bottom: 30px;
	}

	@media ${media.PHONE} {
		padding-top: 280px;

		.section-wrapper {
			margin-left: 0;
			margin-bottom: 25px;
			padding-left: 10px;
			padding-right: 10px;
			text-align: left;
		}
	}
`
