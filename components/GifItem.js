import React from "react";

export default function GifItem({ gif }) {
	return (
		<>
			<li style={{ padding: "2px", float: "left" }}>
				<img src={gif.images.downsized.url} width='300' height='300' />
			</li>
		</>
	);
}
