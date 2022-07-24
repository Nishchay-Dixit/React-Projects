import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import Layout from "./Layout";
import Home from "./Home";
import FacultyList from "./FacultyList";
import Faculty from "./Faculty";
import Contact from "./Contact";

const rootelement = document.getElementById("root");
const root = ReactDom.createRoot(rootelement);

root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="/facultylist" element={<FacultyList />}></Route>
					<Route path="/faculty/:id" element={<Faculty/>}></Route>
					<Route path="/contact" element={<Contact/>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</>
)