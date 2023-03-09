import React, { useContext } from "react";
import Auth from "../Auth/Auth";

export default function Home() {
	const { user } = useContext(UserContext);
	return <div>{user === null ? <Auth /> : "Test"}</div>;
}