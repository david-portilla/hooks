const { renderHook } = require('@testing-library/react-hooks')
import { useCounter } from '../../hooks/useCounter'
describe('testing useCounter hook', () => {

  test('should return default values', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
  })
})
