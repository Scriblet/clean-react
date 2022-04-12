import { HttpPostClient } from 'protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('Remote Authentication', () => {
  test('Should call httpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpPostSpyClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostSpyClient)

    await sut.auth()
    expect(httpPostSpyClient.url).toBe(url)
  })
})
