const { renderHook, act } = require('@testing-library/react-hooks')
import { useCounter } from '../../hooks/useCounter'
describe('testing useCounter hook', () => {

  test('should return default values', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
  })


  test('should increment the counter by 1', () => {

    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => {
      increment()
    })

    const { counter } = result.current
    expect(counter).toBe(101)
  })

  test('should DECREMENT the counter by 1', () => {

    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement()
    })

    const { counter } = result.current
    expect(counter).toBe(99)
  })

  test('should RESET the counter', () => {

    const { result } = renderHook(() => useCounter(100))
    const { decrement, reset } = result.current

    act(() => {
      decrement()
      reset()
    })

    const { counter } = result.current
    expect(counter).toBe(100)
  })

})
