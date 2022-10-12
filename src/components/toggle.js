import React from "react"
import "../style.scss"
import Sun from "../images/sun.svg"
import Moon from "../images/moon.svg"

export default function DarkMode() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [isDark])

  return (
    <button className="global-toggle-switch">
      {isDark ? (
        <img onClick={() => setIsDark(!isDark)} src={Sun} alt="sun img" />
      ) : (
        <img onClick={() => setIsDark(!isDark)} src={Moon} alt="moon img" />
      )}
    </button>
  )
}
