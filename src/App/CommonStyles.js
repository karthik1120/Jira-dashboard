import { createGlobalStyle } from 'styled-components'

/** DO NOT ALTER THIS FILE. It is a copy of https://necolas.github.io/normalize.css/ */

export default createGlobalStyle`
  html {
    line-height: 1.15;
  }
  body {
    margin: 0;
    padding: 0;
  }
  main {
    display: block;
  }

  a {
    background-color: transparent;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  img {
    border-style: none;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  } 
`
