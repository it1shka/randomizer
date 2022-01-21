import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { appendVariant, DispatchType, StateType } from '../store'

export default function AddVariant() {
  const dispatch = useDispatch<DispatchType>()
  const selecting = useSelector((state: StateType) => {
    return state.selecting
  })
  const [input, setInput] = useState('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInput(value)
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(appendVariant(input))
    setInput('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Input required
        disabled={selecting}
        value={input}
        onChange={onInputChange}
        placeholder='Add Item'
      />
    </form>
  )
}

const Input = styled.input`
  width: 100%;
  outline: none;
  border: 4px dashed grey;
  border-radius: 10px;
  color: grey;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.5em 1em;
` 