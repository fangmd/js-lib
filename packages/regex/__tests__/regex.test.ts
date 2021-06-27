import { getUrlParams } from '../src'

describe('regex', () => {
  describe('getUrlParams', () => {
    it('1 add 2 should be 3', async () => {
      const result = getUrlParams('https://www.ithome.com?name=fang&age=12')
      expect(result.name).toBe('fang')
      expect(result.age).toBe('12')
    })
  })
})
