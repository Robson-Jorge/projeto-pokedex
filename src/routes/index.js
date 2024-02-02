import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"

import { ErrorPage } from "../pages/error-page"
import { GlobalStyle } from "../style/Global-style"
import Details from "../pages/details-page"
import PageHome from "../pages/page-home"

const AppRoutes = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <GlobalStyle backgroundTheme={theme} />
      <Routes>
        <Route exact path='/' element={<PageHome />} />
        <Route exact path='/pokemon/:nameOrId' element={<Details />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }