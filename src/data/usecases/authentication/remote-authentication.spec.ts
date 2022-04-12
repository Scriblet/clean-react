import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('Remote Authentication', () => {
  test('Should call httpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostSpyClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostSpyClient)

    await sut.auth()
    expect(httpPostSpyClient.url).toBe(url)
  })
})
