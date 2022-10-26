import { ButtonsType } from '@components/Keypad/KeypadFC/types'
export function getButtons(
  isScreenClear: boolean,
): ButtonsType {
  return [
    { label: '%', value: '%', type: 'operator' },
    { label: '7', value: 7, type: 'numeric' },
    { label: '8', value: 8, type: 'numeric' },
    { label: '9', value: 9, type: 'numeric' },
    { label: '*', value: '*', type: 'operator' },
    {
      label: '-',
      value: '-',
      type: isScreenClear ? 'numeric' : 'operator',
    },
    { label: '4', value: 4, type: 'numeric' },
    { label: '5', value: 5, type: 'numeric' },
    { label: '6', value: 6, type: 'numeric' },
    { label: '\\', value: '/', type: 'operator' },
    { label: '+', value: '+', type: 'operator' },
    { label: '1', value: 1, type: 'numeric' },
    { label: '2', value: 2, type: 'numeric' },
    { label: '3', value: 3, type: 'numeric' },
    { label: '=', value: '=', type: 'result' },
    { label: '.', value: '.', type: 'fx' },
    { label: '(', value: '(', type: 'numeric' },
    { label: '0', value: '0', type: 'numeric' },
    { label: ')', value: ')', type: 'numeric' },
    {
      label: isScreenClear ? 'CE' : 'C',
      value: isScreenClear ? 'CE' : 'C',
      type: 'fx',
    },
  ]
}
