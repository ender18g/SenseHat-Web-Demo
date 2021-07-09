    window.addEventListener('DOMContentLoaded', () => {
        let d = document.getElementById('log');

        let socket = io({transports: ['websocket']}).connect('http://' + document.domain + ':' + location.port);

        
        const dataField = document.querySelector("#dataField");

        console.log("starting");
        socket.emit('start', {data: 'time to start'});

        socket.emit('command', {message:{text:'X',r:254,g:36,b:200}})

        socket.on('imu', (msg) => {

            const data = JSON.stringify(msg)

            //console.log(data);
            const {roll, pitch,yaw} = msg.data.orientation
            dataField.textContent=pitch
  



        });
    });