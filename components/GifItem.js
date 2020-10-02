import React from 'react';

export default function GifItem({ gif }) {
	return (
		<>
			<li style={{ padding: '20px', float: 'left' }}>
				<img src={gif.images.downsized.url} />
			</li>
		</>
	);
}
