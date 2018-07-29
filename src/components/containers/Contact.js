import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import * as emailjs from 'emailjs-com'

import { PageView } from './view.css.js'

import { env } from '../../env.js'

class Contact extends React.Component {
	state = {
		submitting: false,
		bot: false,
		name: '',
		email: '',
		subject: '',
		message: '',
		formSubmitted: false,
		emailError: false,
	}

	handleInputChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		name === 'bot'
			? this.setState({ bot: true })
			: this.setState({
					[name]: value,
			  })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if (this.state.formSubmitted || this.state.bot) {
			return
		}
		this.setState({
			submitting: true,
		})
		emailjs
			.send(
				'default_service',
				'template_YDnP5Aie',
				{
					senderName: this.state.name,
					senderEmail: this.state.email,
					subject: this.state.subject,
					message: this.state.message,
				},
				env.EMAILJS_USER_ID,
			)
			.then((res) => {
				this.setState({
					formSubmitted: true,
					submitting: false,
				})
			})
			.catch((err) => {
				this.setState({
					emailError: true,
					submitting: false,
				})
				console.error('Failed to send email. Error: ', err)
			})
	}

	retryEmail = (event) => {
		event.preventDefault()
		this.setState({
			emailError: false,
		})
	}

	render = () => {
		const formSubmitted = this.state.formSubmitted
		const emailError = this.state.emailError
		const submitting = this.state.submitting
		return (
			<PageView
				className="contact-view"
				style={{ width: this.props.isVisibile ? '100%' : '0' }}>
				<div
					className="page-container"
					style={{ display: formSubmitted ? 'none' : 'block' }}>
					<p>
						If you would like to speak about any opportunities in Seattle or
						remote, feel free to shoot me an email.
					</p>
					<p>Please don't spam me</p>
				</div>

				<Form
					loading={submitting}
					className="contact-form"
					onSubmit={this.handleSubmit}
					style={{ display: formSubmitted ? 'none' : 'block' }}>
					<Form.Field id="email">
						<Form.Input
							name="bot"
							id="email-input"
							fluid
							label="Email"
							placeholder="Full name"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							required
							fluid
							name="name"
							label="Full name"
							placeholder="Full name"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							required
							fluid
							name="email"
							label="Email"
							placeholder="Email"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							required
							fluid
							name="subject"
							label="Subject"
							placeholder="Subject"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.TextArea
							required
							fluid="true"
							name="message"
							label="Message"
							placeholder="Message"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<i>*All fields are required</i>
					<br />
					<Button className="contact-button" type="submit">
						Submit
					</Button>
				</Form>

				<h4 style={{ display: formSubmitted ? 'block' : 'none' }}>
					Thanks for getting in contact, I'll be with you shortly.
				</h4>

				<div style={{ display: emailError ? 'block' : 'none' }}>
					<h4>
						There was an issue with the email server. Please try again Later or
						connect via
						<a href="https://www.linkedin.com/in/dylangrant/">LinkedIn</a>.
					</h4>
					<Button onClick={this.retryEmail}>Retry</Button>
				</div>
			</PageView>
		)
	}
}

export default Contact
