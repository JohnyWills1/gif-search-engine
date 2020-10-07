import React from 'react';
import GifItem from './GifItem';
import { Flex } from '@chakra-ui/core';

export const GifList = ({ gifs }) => {
	const gifItems = gifs.map((image) => {
		return <GifItem key={image.id} gif={image} />;
	});

	return (
		<>
			<Flex flexWrap='wrap' align='center' justify='center'>
				{gifItems}
			</Flex>
		</>
	);
};

export default GifList;
