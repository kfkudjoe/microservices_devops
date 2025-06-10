const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

console.log("Variables and modules have been loaded...");

app.get(
	"/video", async (req, res) => {
		const videoPath = '/home/l3/Desktop/213 - Lost Bonds.mkv';
		const stats = await fs.promises.stat(videoPath);
		
		res.writeHead(
			200, {
				"Content-Length": stats.size,
				"Content-Type": "video/mkv",
			}
		);
		
		fs.createReadStream(videoPath).pipe(res);
	}
);

console.log("Server successfully constructed...");

app.listen(
	port, 
	() => {
		console.log("Microservice listening on port 3000, point your browser at http://localhost:3000/video");
	}
);
