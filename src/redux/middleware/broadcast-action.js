import {socket} from './../../socket';

const logger = store => next => action => {
  let result = next(action);
  socket.emit('action', action);
  return result
};

export default logger;