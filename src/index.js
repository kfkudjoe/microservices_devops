const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

console.log("Variables and modules have been loaded...");

app.get(
	"/video", async (req, res) => {
		const videoPath = '/home/l3/Documents/Software_Engineering/microservices_devops/double/iteration-1/videos/SampleVideo_1280x720_1mb.mp4'
;
		const stats = await fs.promises.stat(videoPath);
		
		res.writeHead(
			200,
			{
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
