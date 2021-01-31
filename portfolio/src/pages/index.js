import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import { themes, ThemeContext } from "../theme/theme-context"
import ThemeTogglerButton from "../components/theme-toggler-button"

export default function Home() {
  const [globalTheme, setGlobalTheme] = useState({
    theme: themes.light,
    toggleTheme: toggleTheme,
  })

  function toggleTheme() {
    var newTheme = globalTheme.theme === themes.light ? themes.dark : themes.light
    console.log(globalTheme.theme)
    console.log(newTheme)
    setGlobalTheme(prevState => ({
      ...prevState,
      theme: newTheme,
    }))
    console.log("Updating theme...")
  }

  return (
    <Layout>
      <Link to="/styledComponents">Styled Components</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <ThemeContext.Provider value={globalTheme}>
        <Content />
      </ThemeContext.Provider>
    </Layout>
  )
}

function Content() {
  return (
    <>
      <ThemeTogglerButton />
    </>
  )
}
