const {Room} = require('../models'),
      _ = require('lodash'),
      {validateAction, handleAction} = require('../game');

function onAction(io, socket) {
  socket.on('action', async function(action) {
    if (!validateAction(action)) return null;

    const room = await Room.findById(socket.roomId);
    handleAction(action, room);
    room.currentAction = action;
    await room.save();

    io.to(`room-${room.id}`).emit('action_taken', {
      room
    });
  });
}

module.exports = onAction;
