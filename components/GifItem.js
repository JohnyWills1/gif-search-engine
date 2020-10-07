import React from 'react';
import { Box } from '@chakra-ui/core';

export default function GifItem({ gif }) {
	return (
		<>
			<Box style={{ padding: '2px' }}>
				<img src={gif.images.downsized.url} width='300' height='300' />
			</Box>
		</>
	);
}
