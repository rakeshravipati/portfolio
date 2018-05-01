import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const Contact = ({ isVisibile }) => {
	const styles = {
		width: isVisibile ? '100%' : '0',
	}

	return (
		<section className="contact-view" style={styles}>
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
				<Button type="submit">Submit</Button>
			</Form>
		</section>
	)
}

export default Contact
