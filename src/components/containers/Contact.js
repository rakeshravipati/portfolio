import React from 'react'
import { Form, Button } from 'semantic-ui-react'

import { PageView } from './view.css.js'

const Contact = ({ isVisibile }) => {
	const styles = {
		width: isVisibile ? '100%' : '0',
	}

	return (
		<PageView className="contact-view" style={styles}>
			<Form className="contact-form">
				<Form.Field>
					<Form.Input fluid label="Full name" placeholder="Full name" />
				</Form.Field>
				<Form.Field>
					<Form.Input fluid label="Email" placeholder="Email" />
				</Form.Field>
				<Form.Field>
					<Form.Input fluid label="Subject" placeholder="Subject" />
				</Form.Field>
				<Form.Field>
					<Form.TextArea fluid label="Message" placeholder="Message" />
				</Form.Field>
				<Button className="contact-button" type="submit">
					Submit
				</Button>
			</Form>
		</PageView>
	)
}

export default Contact
