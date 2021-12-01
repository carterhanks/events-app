import React from "react";
import "./EventsList.css";
import Event from "../Event/Event.js";

export default function EventsList({ events = [], updateEvent, deleteEvent }) {
	function renderEvents() {
		return events.map((event) => {
			return (
				<Event
					className="events-container"
					key={event.id}
					event={event}
					updateEvent={updateEvent}
					deleteEvent={deleteEvent}
				/>
			);
		});
	}

	return renderEvents();
}
