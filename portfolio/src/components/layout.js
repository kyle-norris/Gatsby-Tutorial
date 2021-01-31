import React, { Children } from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "black")};
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle theme="purple"/>
      {children}
    </>
  )
}
