const { Server } = require("socket.io");
const { createServer } = require("http");
const axios = require('axios');



let preReservations = [
    // { socketID, roomID, requestedNumber, start, end }
];


const httpServer = createServer();
const io = new Server(httpServer, {
  cors:{ origin: '*' }
});

io.on("connection", (socket) => {

    console.log('A user connected'); 

    socket.on('booking', async (data)  => {
        console.log('Booking event received');
        

        const payload = { socketID: socket.id, roomID: data.roomID, requestedNumber: data.requestedNumber, startDate:data.startDate, endDate:data.endDate };

        console.log(payload);

        preReservations.push(
           payload
        )

        // remove roomID from stock !!
        const url = 'http://196.234.125.66:8049/CENTRAL_API/ReservedTemp'; 

        try {
            const response = await axios.post(url, payload);
            console.log('Response:', response.data);
            if (response.data.success == true) {
                socket.broadcast.emit('refreshData', { user:null, roomID: null });
            }

        } catch (error) {
            console.error('Error making POST request:', error);
        }

        
    });

    socket.on('disconnect', () => {

        console.log('A user disconnected', socket.id);

        // get preservation for the socket
        let socketReservation = [];

        preReservations.map((tmp)=>{
            if(tmp.socketID == socket.id){
                socketReservation.push(tmp);
            }
        })

        console.log(socketReservation);
        
    });
   
});

httpServer.listen(8080);