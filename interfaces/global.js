// @flow
import * as React from 'react'
import { type } from 'os'

declare module CSSModule {
  declare module.exports: { [key: string]: string }
}

declare module 'react-axe' {
  declare function axe(React: any, ReactDOM: any, delay: number): void
  declare module.exports: typeof axe
}
