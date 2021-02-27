/**
 * Type: in-browser utility models
 * 
 * The strategy chosen to pass params between the free is 'custom events'
 * JavaScript has a native functionality to dispatch custom events, been, this way, library agnostic. 
 * 
 * Other alternatives:
 *   - Pub Sub pattern
 *   - Observer pattern
 */

/**
 * 
 * @param {*} name name of the event
 * @param {*} data amount of data
 */
export function emitEvent(name, data) {
  // This dispatch will 
  dispatchEvent(new CustomEvent(name, {
    detail: data,
  }))
}

/**
 * 
 * @param {*} name name of the event
 * @param {*} cb callback function to be called when the event is emitted
 */
export function listenEvent(name, cb) {
  // Creating a event listener on the navigator
  window.addEventListener(name, cb)
}
