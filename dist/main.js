(function() {
  var connection;

  connection = quickconnect('https://switchboard.rtc.io/', {
    room: 'qc-simple-demo'
  });

  connection.on('call:started', function(id, pc, data) {
    return console.log('we have a new connection to: ' + id);
  });

}).call(this);
