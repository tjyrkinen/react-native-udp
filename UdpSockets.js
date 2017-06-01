
/**
 * @providesModule UdpSockets
 * @noflow
 */

import UdpSocket from './UdpSocket'

export function createSocket (options) {
  if (typeof options === 'string') {
    return new UdpSocket({ type: options })
  }
  return new UdpSocket(options)
}

export const Socket = UdpSocket

