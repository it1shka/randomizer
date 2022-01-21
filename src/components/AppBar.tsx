import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearVariants, DispatchType, setChosen, setPointer, setSelecting, StateType } from '../store'
import Button from './Button'

const randomInt = (max: number) => {
  return Math.floor(Math.random() * max)
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
      const idx = randomInt(variants.length)
      dispatch(setPointer(idx))
    }, 250)
    setTimeout(() => {
      clearInterval(interval)
      dispatch(setChosen(true))
    }, 5 * 1000)
  }

  const clear = () => {
    dispatch(clearVariants())
  }

  const disableButtons = selecting || (variants.length < 2)

  return (
    <Container>
      <h1>Randomizer</h1>
      <Button
        disabled={disableButtons}
        style={{margin: '0em 0.25em 0em auto'}}
        onClick={clear}
      >
        Clear
      </Button>
      <Button
        disabled={disableButtons}
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