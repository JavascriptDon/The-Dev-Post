import React from "react"

export default function Footer() {
  return (
    <footer>
      <div style={{ float: "right" }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
      </div>
      <a
        href="https://twitter.com/legs_taken"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>{" "}
      &bull;{" "}
      <a
        href="https://github.com/JavascriptDon"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{" "}
      &bull;{" "}
      <a
        href="https://dev.to/hr21don"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dev
      </a>
    </footer>
  )
}

//Credit: Overreacted.IO | Source: https://github.com/gaearon/overreacted.io | License: MIT