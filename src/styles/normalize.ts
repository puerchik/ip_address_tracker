import { createGlobalStyle } from 'styled-components'

export const Normalize = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}

:where(ul, ol):where([class]) {
  padding-left: 0;
}

body,
:where(blockquote, figure):where([class]) {
  margin: 0;
}

:where(
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl
):where([class]) {
  margin-block: 0;
}

:where(dd[class]) {
  margin-left: 0;
}

:where(fieldset[class]) {
  margin-left: 0;
  padding: 0;
  border: none;
}

:where(ul[class]) {
  list-style: none;
}

p {
  --paragraphMarginBottom: 24px;

  margin-block: 0;
}

p:where(:not([class]):not(:last-child)) {
  margin-bottom: var(--paragraphMarginBottom);
}

img {
  display: block;
  max-width: 100%;
}

input,
textarea,
select,
button {
  font: inherit;
}

html {
  height: 100%;
}

html,
:has(:target) {
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  line-height: 1.5;
}

svg *[fill] { fill: currentColor }
svg *[stroke] { stroke: currentColor }

svg * {
  transition-property: fill, stroke;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
