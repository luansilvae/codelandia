import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Main from './pages/Main'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeName, themes } from './styles/theme'

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light')
  const currentTheme = themes[themeName]

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main themeName={themeName} setThemeName={setThemeName} />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
