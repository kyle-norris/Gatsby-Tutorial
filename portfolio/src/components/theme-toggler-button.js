import React from "react"
import { ThemeContext } from "../theme/theme-context"

export default function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}
