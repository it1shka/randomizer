import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { DispatchType, setChosen, setSelecting, StateType } from '../store'
import Button from './Button'

export default function WinnerInfo() {
  const dispatch = useDispatch<DispatchType>()

  const variants = useSelector((state: StateType) => {
    return state.variants
  })
  const pointer = useSelector((state: StateType) => {
    return state.pointer
  })

  const winner = variants[pointer] ?? 'No winner :('

  const next = () => {
    dispatch(setSelecting(false))
    dispatch(setChosen(false))
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <Subtitle>And the winner is...</Subtitle>
        <WinnerTitle>{winner}🏆</WinnerTitle>
        <OkButton onClick={next}>Ok.</OkButton>
      </InnerContainer>
    </OuterContainer>
  )
}

const OkButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`

const Subtitle = styled.h2`
  background-color: var(--primary);
  color: white;
  padding: 0.25em 0.5em;
`

const WinnerTitle = styled.h1`
  color: var(--primary);
  text-align: center;
  padding: 1em;
  text-decoration: underline;
`

const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  min-width: 360px;
  min-height: 240px;
  overflow: hidden;
  position: relative;
`