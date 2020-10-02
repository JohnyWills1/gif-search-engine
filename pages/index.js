import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Flex, Box, Link } from "@chakra-ui/core";
import SearchForm from "../components/SearchForm";
import GifList from "../components/GifList";
import react, { useState } from "react";
import axios from "axios";

export default function Home() {
	const [gifs, setGifs] = useState([]);

	function onSubmit(searchTerm, searchLimit) {
		console.log("Search Term - ", searchTerm);
		console.log("Search Limit - ", searchLimit);
		axios
			.get(
				"https://api.giphy.com/v1/gifs/search?api_key=Z4U4HihLTc85Glp44AsE3xNsgVlsr0aL&q=" +
					searchTerm +
					"&limit=" +
					searchLimit +
					"&offset=0&rating=g&lang=en"
			)
			.then((response) => {
				setGifs(response.data.data);
			})
			.catch((error) => {
				setSubmitting(false);
				console.log("errorrrrrrr - ", error);
			});
	}

	return (
		<>
			<Flex align='center' justify='center' height='20vh' width='100%'>
				<Box>
					<SearchForm onSubmit={onSubmit} />{" "}
				</Box>{" "}
			</Flex>{" "}
			<Flex align='center' justify='center'>
				<GifList gifs={gifs} />{" "}
			</Flex>
		</>
	);
}
