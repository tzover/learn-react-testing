import { atom } from 'recoil'

export const textState = atom<string>({
  // access key
  key: 'textState',
  // initialize
  default: 'Recoil',
})

export const inputTextState = atom<string>({
  // access key
  key: 'inputTextState',
  // initialize
  default: '',
})
