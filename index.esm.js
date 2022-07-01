/** @Fix WalletConnect fails to get bundled with vite --------- start --------- */
import './process'
import { Buffer } from 'buffer'
import util from 'util'
if (typeof window !== 'undefined') {
  // global is not defined
  if (typeof window.global === 'undefined')
    window.global = globalThis

  // buffer is not defined
  if (typeof window.Buffer === 'undefined')
    window.Buffer = Buffer

  // util is not defined
  if (typeof window.util === 'undefined')
    window.util = util

  // exports is not defined
  if (typeof window.module === 'undefined') {
    window.module = { exports: {} }
    window.exports = window.module.exports
  }
}
/** @Fix WalletConnect fails to get bundled with vite --------- end --------- */
