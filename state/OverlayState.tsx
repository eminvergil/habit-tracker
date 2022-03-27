import { proxy } from 'valtio'

let overlayInit = { overlay: false}
export const overlayState = proxy(overlayInit)


