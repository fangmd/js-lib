import { add } from '../src/index'

describe('time', () => {
  describe('add', () => {
    it('1 add 2 should be 3', async () => {
      const result = add(1, 2)
      expect(result).toBe(3)
    })
  })
})
