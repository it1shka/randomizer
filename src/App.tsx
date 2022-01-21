import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AddVariant from './components/AddVariant'
import AppBar from './components/AppBar'
import Variants from './components/Variants'
import WinnerInfo from './components/WinnerInfo'
import { StateType } from './store'

export default function App() {

  const chosen = useSelector((state: StateType) => {
    return state.chosen
  })

  return (
    <>
    {chosen && <WinnerInfo />}
    <OuterContainer>
    <InnerContainer>
      <AppBar />
      <Variants />
      <AddVariant />
    </InnerContainer>
    </OuterContainer>  
    </>
  )
}

const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerContainer = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 640px;
  box-shadow: #ddd 0px 0px 3px;
  border-radius: 15px;
  overflow: hidden;
`