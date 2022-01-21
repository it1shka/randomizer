import { createStore } from "redux";

//#region actions

interface AppendVariantAction {
  type: 'APPEND_VARIANT',
  payload: string
}

export function appendVariant(
  variant: string
): AppendVariantAction {
  return {
    type: 'APPEND_VARIANT',
    payload: variant
  }
}

interface RemoveVariantAction {
  type: 'REMOVE_VARIANT',
  payload: number
}

export function removeVariant(
  idx: number
): RemoveVariantAction {
  return {
    type: 'REMOVE_VARIANT',
    payload: idx
  }
}

interface ClearVariantsAction {
  type: 'CLEAR_VARIANTS'
}

export function clearVariants(): ClearVariantsAction {
  return {
    type: 'CLEAR_VARIANTS'
  }
}

interface SetSelectingAction {
  type: 'SET_SELECTING',
  payload: boolean
}

export function setSelecting(
  selecting: boolean
): SetSelectingAction {
  return {
    type: 'SET_SELECTING',
    payload: selecting
  }
}

interface SetPointerAction {
  type: 'SET_POINTER',
  payload: number
}

export function setPointer(
  pointer: number
): SetPointerAction {
  return {
    type: 'SET_POINTER',
    payload: pointer
  }
}

interface SetChosenAction {
  type: 'SET_CHOSEN',
  payload: boolean
}

export function setChosen(
  chosen: boolean
): SetChosenAction {
  return {
    type: 'SET_CHOSEN',
    payload: chosen
  }
}

type Action = 
  | AppendVariantAction
  | RemoveVariantAction
  | ClearVariantsAction
  | SetSelectingAction
  | SetPointerAction
  | SetChosenAction

//#endregion

interface State {
  variants: string[],
  selecting: boolean,
  pointer: number,
  chosen: boolean
}

const defaultState: State = {
  variants: [],
  selecting: false,
  pointer: 0,
  chosen: false
}

const reducer = (
  state = defaultState,
  action: Action
): State => {
  switch(action.type) {
    case 'APPEND_VARIANT':
      return ({
        ...state, 
        variants: [
          ...state.variants, 
          action.payload
        ]
      })
    case 'REMOVE_VARIANT':
      return ({
        ...state,
        variants: state.variants.filter((_, idx) => {
          return idx !== action.payload
        })
      })
    case 'CLEAR_VARIANTS':
      return ({
        ...state,
        variants: []
      })
    case 'SET_SELECTING':
      return ({
        ...state,
        selecting: action.payload
      })
    case 'SET_POINTER':
      return ({
        ...state,
        pointer: action.payload
      })
    case 'SET_CHOSEN':
      return ({
        ...state,
        chosen: action.payload
      })
    default:
      return state
  }
}

//#region public store interface 

export const store = createStore(reducer)

export type DispatchType = 
  typeof store.dispatch
export type StateType = 
  ReturnType<typeof reducer>

//#endregion