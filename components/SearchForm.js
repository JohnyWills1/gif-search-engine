import react, { useState } from "react";
import {
	Button,
	FormErrorMessage,
	FormLabel,
	Input,
	Flex,
	Box,
	FormControl,
	Link,
	Select,
} from "@chakra-ui/core";
import { Formik, Form } from "formik";

const SearchButton = ({ onSubmit }) => {
	function handleSubmit({ searchString, searchLimit }) {
		onSubmit(searchString, searchLimit);
	}

	return (
		<>
			<Formik
				initialValues={{ searchString: "" }}
				validate={(values) => {
					const errors = {};
					if (!values.searchString) {
						errors.searchString = "You must include a gif name!";
					}
					if (!values.searchLimit) {
						errors.searchLimit = "Please select a number of GIFs to display!";
					}
					return errors;
				}}
				onSubmit={handleSubmit}
			>
				{({ errors, values, handleSubmit, setFieldValue, touched }) => (
					<Form onSubmit={handleSubmit}>
						<Flex align='center'>
							<FormControl
								isInvalid={errors.searchString && touched.searchString}
							>
								<FormLabel htmlFor='gif search bar'>
									GIF Search Engine
								</FormLabel>
								<Input
									placeholder='Search for a GIF!'
									name='searchString'
									id='searchString'
									onChange={(e) =>
										setFieldValue("searchString", e.target.value)
									}
									value={values.searchString}
								/>
								<FormErrorMessage>{errors.searchString}</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={errors.searchTerm && touched.searchTerm}
								ml={5}
							>
								<FormLabel htmlFor='gif results limit'>
									Number of Results
								</FormLabel>
								<Select
									placeholder='Select option'
									onChange={(e) => setFieldValue("searchLimit", e.target.value)}
									value={values.searchLimit}
								>
									<option value={5}>5</option>
									<option value={10}>10</option>
									<option value={15}>15</option>
									<option value={20}>20</option>
									<option value={25}>25</option>
									<option value={30}>30</option>
								</Select>
								<FormErrorMessage>{errors.searchTerm}</FormErrorMessage>
							</FormControl>
							<Button
								ml={5}
								mt={8}
								type='submit'
								variantColor='green'
								leftIcon='search'
							>
								Search
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SearchButton;
