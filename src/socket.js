import io from 'socket.io-client';
export const socket = io('http://localhost:5000');
socket.on('connect', ()=> {
  console.log('connect');
});

socket.on('action',  (action)=> {
  console.log(action);
});