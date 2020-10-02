import react, { useState } from 'react';
import {
	Button,
	FormErrorMessage,
	FormLabel,
	Input,
	Flex,
	Box,
	FormControl,
	Link,
} from '@chakra-ui/core';
import { Formik, Form } from 'formik';

const SearchButton = ({ onSubmit }) => {
	function handleSubmit({ searchString }) {
		onSubmit(searchString);
	}

	return (
		<>
			<Formik
				initialValues={{ searchString: '' }}
				validate={(values) => {
					const errors = {};
					if (!values.searchString) {
						errors.searchString = 'You must include a gif name!';
					}
					return errors;
				}}
				onSubmit={handleSubmit}
			>
				{({ errors, values, handleSubmit, setFieldValue, touched }) => (
					<Form onSubmit={handleSubmit}>
						<FormLabel htmlFor='gif search bar'>GIF Search Engine</FormLabel>
						<Flex align='center'>
							<FormControl isInvalid={errors.searchString && touched.searchString}>
								<Input
									p={5}
									placeholder='Search for a GIF!'
									name='searchString'
									id='searchString'
									onChange={(e) => setFieldValue('searchString', e.target.value)}
									value={values.searchString}
								/>
								<FormErrorMessage>{errors.searchString}</FormErrorMessage>
							</FormControl>
							<Button
								ml={5}
								p={6}
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
