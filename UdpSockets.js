
/**
 * @providesModule UdpSockets
 * @noflow
 */

const UdpSocket = require('./UdpSocket');

exports.createSocket = function(options) {
  if (typeof options === 'string') return { type: options }
  return new UdpSocket(options)
}

exports.Socket = UdpSocket;
