import React, { useEffect, useState } from "react";
import "./Event.css";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Event(props) {
	const [event, setEvent] = useState({});

	useEffect(() => {
		setEvent(props.event);
	}, [props.event]);

	const handleChange = (e) => {
		setEvent({ ...event, [e.target.name]: e.target.value });
	};

	return (
		<Paper elevation={5} className="event-fields-container">
			<TextField
				className="event-field"
				name="name"
				variant="outlined"
				label="Event Name"
				onChange={(e) => handleChange(e)}
				value={event.name}
				InputLabelProps={{ shrink: event?.name?.length || false }}
			/>
			<TextField
				className="event-field"
				name="company"
				variant="outlined"
				label="Company Name"
				onChange={(e) => handleChange(e)}
				value={event.company}
				InputLabelProps={{ shrink: event?.company?.length || false }}
			/>
			<TextField
				className="event-field"
				name="description"
				variant="outlined"
				label="Description"
				onChange={(e) => handleChange(e)}
				value={event.description}
				multiline={true}
				InputLabelProps={{ shrink: event?.description?.length || false }}
			/>
			<TextField
				className="event-field"
				name="color"
				variant="outlined"
				label="color"
				onChange={(e) => handleChange(e)}
				value={event.color}
				InputLabelProps={{ shrink: event?.color?.length || false }}
			/>
			<IconButton onClick={() => props.updateEvent(event.id, event)}>
				<Button variant="contained" color="success">
					SAVE
				</Button>
			</IconButton>
			<IconButton onClick={() => props.deleteEvent(event.id, event)}>
				<DeleteIcon />
			</IconButton>
		</Paper>
	);
}
