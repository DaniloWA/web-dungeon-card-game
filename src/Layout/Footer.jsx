import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="https://www.linkedin.com/in/danilo-oliveira-web/">Linkedin</a></li>
            <li className="menu__item"><a className="menu__link" href="https://github.com/DaniloWA">Github</a></li>
            <li className="menu__item"><a className="menu__link" href="https://daniloo.dev/">Portfolio</a></li>
          </ul>
          <p>&copy;2022 Danilo Oliveira | All Rights Reserved</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default Footer