if (typeof window !== 'undefined') {
  if (typeof window.process === 'undefined')
    window.process = { env: {} }
}
