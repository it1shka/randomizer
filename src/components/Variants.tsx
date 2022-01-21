import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { DispatchType, removeVariant, StateType } from '../store'
import Button from './Button'

export default function Variants() {
  const variants = useSelector((state: StateType) => {
    return state.variants
  })

  return (
    <ul>
      {variants.map((variant, idx) => {
        return (
          <Variant
            key={idx} 
            variant={variant} 
            idx={idx}
          />
        )
      })}
    </ul>
  )
}

function Variant({idx, variant}: {idx: number, variant: string}) {
  const dispatch = useDispatch<DispatchType>()
  const selecting = useSelector((state: StateType) => {
    return state.selecting
  })
  const pointer = useSelector((state: StateType) => {
    return state.pointer
  })
  const removeThis = () => {
    dispatch(removeVariant(idx))
  }

  return (
    <ListElement featured={selecting && pointer === idx}>
      <h2>{variant}</h2>
      {!selecting && <Button 
        onClick={removeThis}
        style={{marginLeft: 'auto'}}>
        Remove
      </Button>}
    </ListElement>
  )
}

const ListElement = styled.li<{featured?: boolean}>`
  display: flex;
  padding: 0.75em 1em;
  font-size: 1.1em;
  color: grey;
  align-items: center;
  border: 5px solid transparent;
  transition: 0.2s all 0s;

  ${({featured}) => featured && css`
  border: 5px solid var(--primary);
  color: var(--primary);
  padding-left: 2em;
  `}

  & > button {
    display: none;
  }

  &:hover > button {
    display: block;
  }
`