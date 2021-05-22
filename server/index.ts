import express from 'express';
import { createServer } from 'http';
import Next from 'next';
import { Server as SocketServer } from 'socket.io';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const next = Next({ dev });
const handle = next.getRequestHandler();

next.prepare().then(async () => {
	const app = express();
	const server = createServer(app);
	const io = new SocketServer({ transports: ['websocket'] });
	io.attach(server);

	app.use(express.json());

	app.all('*', (req, res) => handle(req, res));

	server.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
})