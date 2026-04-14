import React from "react"
import "../style.scss"
import Sun from "../images/sun.svg"
import Moon from "../images/moon.svg"

function getDefaultTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const savedTheme = window.localStorage.getItem("mode")
    return savedTheme ? savedTheme : "light"
  }
  return "light"
}

export default function DarkMode() {
  const [isDark, setIsDark] = React.useState(getDefaultTheme)

  React.useEffect(() => {
    document.body.classList.toggle("dark", isDark === "dark")
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("mode", isDark)
    }
  }, [isDark])

  const toggle = () => setIsDark(isDark === "dark" ? "light" : "dark")

  return (
    <div className="global-toggle-switch">
      <span
        role="button"
        tabIndex={0}
        aria-label={isDark === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggle}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && toggle()}
        style={{ cursor: "pointer" }}
      >
        {isDark === "dark" ? (
          <img src={Sun} alt="sun icon" />
        ) : (
          <img src={Moon} alt="moon icon" />
        )}
      </span>
    </div>
  )
}
