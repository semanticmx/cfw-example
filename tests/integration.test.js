const fetch = require('node-fetch')

it('shows current environment', async () => {
  return fetch('http://127.0.0.1:8787/')
    .then(response => response.text())
    .then(content => {
      expect(content).toContain('"environment":"local"')
    })
})
