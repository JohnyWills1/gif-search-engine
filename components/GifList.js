import React from 'react';
import GifItem from './GifItem';

export const GifList = ({ gifs }) => {
	const gifItems = gifs.map((image) => {
		return <GifItem key={image.id} gif={image} />;
	});

	return (
		<>
			<ul>{gifItems}</ul>
		</>
	);
};

export default GifList;
