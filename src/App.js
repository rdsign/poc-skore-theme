import { useState, useRef } from 'react';
import bg from './assets/background.png'
import loginDark from './assets/login_dark.jpg'
import loginLight from './assets/login_light.jpg'
import google from './assets/google-plus.svg'
import skore from './assets/skore.svg'
import { Container } from './Style'
import { motion } from "framer-motion"

const login = {
  light: loginLight,
  dark: loginDark,
}

function App() {
  const [theme, setTheme] = useState('light')
  const constraint = useRef(null)

  const themeHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Container data-theme={theme}>
      <div className="header">
        <img src={skore} alt="Skore"/>
        <button className={theme === 'dark' ? 'active toggle' : 'toggle'} onClick={themeHandler}>
          <span/>
        </button>
      </div>

      <div className="content">
        <div className="cover" ref={constraint}>
          <motion.img src={login[theme]} alt="theme" whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 1 }}/>
        </div>
        <div className="login">
          <h4>E aí, Skorean!</h4>
          <h1>Que bom ter você por aqui!</h1>
          <p>Faça o seu login para continuar</p>
          <button layout type="button" transition={{ layoutX: {duration: 1}, layoutY: {duration: 1} }} className="tp">
            <img src={google} alt="Acessar com o Google"/>
            Acessar com o Google
          </button>
        </div>
      </div>

      <div className="pattern">
        <img src={bg} alt=""/>
      </div>
    </Container>
  );
}

export default App;
