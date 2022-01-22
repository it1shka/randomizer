import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearVariants, DispatchType, increasePointer, setChosen, setSelecting, StateType } from '../store'
import Button from './Button'

const MIN_DELAY =  2 * 1000
const MAX_DELAY = 6 * 1000

function getRandomDelay(): number {
  return MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY)
}

export default function AppBar() {
  const dispatch = useDispatch<DispatchType>()
  const selecting = useSelector((state: StateType) => {
    return state.selecting
  })
  const variants = useSelector((state: StateType) => {
    return state.variants
  })

  const select = () => {
    dispatch(setSelecting(true))
    const interval = setInterval(() => {
      dispatch(increasePointer())
    }, 75)
    const delay = getRandomDelay()
    setTimeout(() => {
      clearInterval(interval)
      dispatch(setChosen(true))
    }, delay)
  }

  const clear = () => {
    dispatch(clearVariants())
  }

  return (
    <Container>
      <h1>Randomizer</h1>
      <Button
        disabled={selecting}
        style={{margin: '0em 0.25em 0em auto'}}
        onClick={clear}
      >
        Clear
      </Button>
      <Button
        disabled={selecting || (variants.length < 2)}
        onClick={select}
        >
          Go!
      </Button>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  background-color: var(--primary);
  color: white;
  padding: 1em;
`