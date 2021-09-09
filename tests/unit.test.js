import Message from '../src/Message'

class MockRequest {
  async json() {
    return {
      status: 'success',
    }
  }
}

test('shows version', async () => {
  const request = new MockRequest()
  try {
    await Message(request)
  } catch (e) {
    expect(e.message).toContain('"version": "local"')
  }
})
