import React, { useState } from "react";
import "./Form.css";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Form(props) {
	const [values, setValues] = useState({
		name: "",
		company: "",
		description: "",
		color: ""
	});

	const [valid, setValid] = useState(true);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			values.name.length &&
			values.company.length &&
			values.description.length &&
			values.color.length
		) {
			setValid(true);
			props.createEvent(values);
			setValues({ name: "", company: "", description: "", color: "" });
		} else {
			setValid(false);
		}
	};

	return (
		<Paper elevation={5} className="form-container">
			<form className="form-fields-container" onSubmit={handleSubmit}>
				<TextField
					className="form-field"
					variant="outlined"
					onChange={handleChange}
					value={values.name}
					label="Event Name"
					name="name"
				/>
				{!valid && !values.name ? (
					<span>Please enter an Event Name</span>
				) : null}
				<TextField
					className="form-field"
					onChange={handleChange}
					value={values.company}
					label="Company Name"
					name="company"
				/>
				{!valid && !values.company ? (
					<span>Please enter a Company Name</span>
				) : null}
				<TextField
					className="form-field"
					onChange={handleChange}
					value={values.description}
					label="Event Description"
					name="description"
				/>
				{!valid && !values.description ? (
					<span>Please enter an Event Description</span>
				) : null}
				<TextField
					className="form-field"
					onChange={handleChange}
					value={values.color}
					label="Event Color"
					name="color"
				/>
				{!valid && !values.color ? (
					<span>Please enter a Color to be assiciated with this Event</span>
				) : null}
				<br />
			</form>
			<IconButton className="submit-button" onClick={handleSubmit}>
				<Button variant="contained" color="success">
					Submit
				</Button>
			</IconButton>
		</Paper>
	);
}
