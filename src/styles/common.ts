import { css } from 'styled-components'

export const Flex = css`
  display: flex;
`

export const ResetButton = css`
  padding: 0;
  background-color: transparent;
  border: none;
`

export const VisuallyHidden = css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
`
