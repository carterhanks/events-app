//This is the main page, parent-most component that houses the API calls, lifecycle methods, error handling (with MUI snackbar) and renders the form and the event components.
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./EventsPage.css";
import Form from "../Form/Form";
import EventsList from "../EventsList/EventsList";
import axios from "axios";

function EventsPage() {
	return <div></div>;
}

export default EventsPage;
