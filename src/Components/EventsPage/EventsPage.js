import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./EventsPage.css";
import Form from "../Form/Form";
import EventsList from "../EventsList/EventsList";
import axios from "axios";

export default function EventsPage() {
	const [events, setEvents] = useState([]);
	const [alert, setAlert] = useState({
		type: "",
		message: ""
	});

	useEffect(() => {
		getEvents();
		return clearTimeout();
	}, []);

	const getEvents = async () => {
		await axios
			.get("https://rf-json-server.herokuapp.com/events/")
			.then((result) => {
				setEvents(result.data);
			})
			.catch((error) => {
				setAlert({
					type: "failure",
					message: `Error: ${error.message}`
				});
			})
			.finally(() => {
				setTimeout(() => {
					setAlert({
						type: "",
						message: ""
					});
				}, 3000);
			});
	};

	const updateEvent = async (eventId, eventData) => {
		await axios
			.put(`https://rf-json-server.herokuapp.com/events/${eventId}`, eventData)
			.then(() => {
				setAlert({
					type: "success",
					message: "Event Updated Successfully!"
				});
				getEvents();
			})
			.catch((error) => {
				setAlert({
					type: "failure",
					message: `Error: ${error.message}`
				});
			})
			.finally(() => {
				setTimeout(() => {
					setAlert({
						type: "",
						message: ""
					});
				}, 3000);
			});
	};

	const deleteEvent = async (eventId, eventData) => {
		await axios
			.delete(
				`https://rf-json-server.herokuapp.com/events/${eventId}`,
				eventData
			)
			.then(() => {
				setAlert({
					type: "success",
					message: "Event Deleted Successfully!"
				});
				getEvents();
			})
			.catch((error) => {
				setAlert({
					type: "failure",
					message: `Error: ${error.message}`
				});
			})
			.finally(() => {
				setTimeout(() => {
					setAlert({
						type: "",
						message: ""
					});
				}, 3000);
			});
	};

	const createEvent = async (formValues) => {
		await axios
			.post(`https://rf-json-server.herokuapp.com/events/`, formValues)
			.then(() => {
				setAlert({
					type: "success",
					message: "Event Created Successfully!"
				});
				getEvents();
			})
			.catch((error) => {
				setAlert({
					type: "failure",
					message: `Error: ${error.message}`
				});
			})
			.finally(() => {
				setTimeout(() => {
					setAlert({
						type: "",
						message: ""
					});
				}, 3000);
			});
	};

	return (
		<div className="events-page-container">
			{alert.type !== "" && (
				<div
					className={
						alert.type === "success" ? "alert-success" : "alert-failure"
					}
				>
					<h2>{alert.message}</h2>
				</div>
			)}
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div className="form-page-container">
							<h1>- Create Event -</h1>
							<Form
								createEvent={createEvent}
								alert={alert}
								setAlert={setAlert}
							/>
						</div>
					}
				/>
				<Route
					path="/events"
					element={
						<div className="events-list-page-container">
							<h1>- Existing Events -</h1>
							<p>
								To modify an event: Change info within input fields and click
								"SAVE" button to update.{" "}
							</p>
							<p>
								To delete an event: Click the trash can icon within that event.
							</p>
							<EventsList
								events={events}
								updateEvent={updateEvent}
								deleteEvent={deleteEvent}
							/>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}
