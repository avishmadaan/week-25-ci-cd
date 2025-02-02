import { WebSocketServer } from 'ws';
import {client} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(socket) {
  socket.on('error', console.error);

  const user = await client.user.create({
    data:{
        username:Math.random().toString(),
        password:Math.random().toString()
    }
  })

  console.log(user);

  socket.on('message', function message(data) {
    console.log('received: %s', data);
  });

  socket.send('something');
});