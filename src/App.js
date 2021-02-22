import { useState } from 'react';
import bg from './assets/background.png'
import loginDark from './assets/login_dark.jpg'
import loginLight from './assets/login_light.jpg'
import google from './assets/google-plus.svg'
import skore from './assets/skore.svg'
import styled from 'styled-components'

const login = {
  light: loginLight,
  dark: loginDark,
}

const Container = styled.div`
  align-items: center;
  background: var(--company-secondary);
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: all 0.6s cubic-bezier(0.215, 0.610, 0.355, 1);
  width: 100%;

  --company-primary: #26E1CD;
  --company-secondary: #7933F4;
  --ui-1100: #21232F;
  --ui-1000: #F3F5F9;
  --ui-100: #F3F5F9;
  
  &[data-theme="dark"] {
    --company-secondary: #21232F;
    --ui-1100: #F3F5F9;
    --ui-1000: #323443;
    --ui-100: #323443;

    .tp {
      --company-primary: #26E1CD;
      --company-secondary: #7933F4;
      --ui-1100: #21232F;
      --ui-1000: #F3F5F9;
      --ui-100: #F3F5F9;
    }
  }

  * {
    transition: all 0.6s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    left: 0;
    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    
    img {
      height: 4rem;
    }

    .toggle {
      align-items: center;
      background: var(--ui-1100);
      border-radius: 2.5rem;
      display: flex;
      height: 2.5rem;
      transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
      width: 5rem;
      
      span {
        background: var(--ui-100);
        border-radius: 1.5rem;
        display: block;
        height: 1.5rem;
        margin-left: 0.75rem;
        transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
        width: 1.5rem;
      }
    }
    
    .active {
      background: var(--ui-100);

      span {
        background: var(--ui-100);
        border: 0.25rem solid var(--ui-100);
        border-radius: 50%;
        box-shadow: inset 0.45rem 0 var(--ui-1100), inset 0 1rem 0.05rem 0.05rem var(--ui-1100);
        height: 1.66rem;
        margin-left: 3rem;
        width: 1.66rem;
      }
    }
  }

  .content {
    align-items: center;
    background: var(--ui-1000);
    border-radius: 1rem;
    display: flex;
    height: 70rem;
    justify-content: center;
    overflow: hidden;
    width: 100rem;
    z-index: 1;

    .cover {
      align-items: center;
      display: flex;
      justify-content: center;
      overflow: hidden;
      width: 50%;
      
      img {
        height: 100%;
        object-fit: cover;
        min-width: 55rem;
        width: 100%;
      }

    }

    .login {
      color: var(--ui-1100);
      padding: 0 12rem 0 6rem;
      width: 50%;
      
      h4 {
        font-size: 1.9rem;
        font-weight: 500;
        margin-bottom: 7rem;
        text-transform: uppercase;
        text-decoration: underline;
      }
      
      h1 {
        font-size: 4.4rem;
        line-height: 1em;
        margin-bottom: 2rem;
      }

      p {
        font-size: 1.9rem;
        font-weight: 500;
        margin-bottom: 2rem;
      }

      button {
        align-items: center;
        background: #FD585B;
        border-radius: 4rem;
        color: var(--ui-100);
        display: flex;
        font-size: 1.5rem;
        font-weight: 800;
        justify-content: center;
        padding: 1.5rem;
        position: relative;
        width: 100%;

        img {
          height: 1.75rem;
          left: 1.5rem;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          width: 1.75rem
        }
      }
    }
  }

  .pattern {
    left: 50%;
    height: 100%;
    mix-blend-mode: lighten;
    opacity: 0.15;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 0;
    
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  @media all and (max-width: 1366px) and (orientation: portrait) {
    .content {
      flex-direction: column;
      height: 100rem;
      min-height: 62vh;
      max-height: 76vh;
      min-width: 72vw;
      max-width: 86vw;
      width: 70rem;

      .cover {
        height: 45%;
        width: 100%;
        
        img {
          min-width: unset;
        }
      }
      
      .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding:  0 15rem;
        height: 55%;
        width: 100%;
      }
    }
  }

  @media all and (max-height: 728px) and (orientation: landscape) {
    .content {
      margin-top: 2rem;
      min-height: 60vh;
      max-height: 72vh;
      min-width: 80vw;
      max-width: 90vw;
      width: 70rem;

      .cover {
        width: 40%;
        
        img {
          min-width: 40vw;
        }
      }
      
      .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem;
        width: 60%;

        h4 {
          margin-bottom: 3rem;
        }
      }
    }
  }
`

function App() {
  const [theme, setTheme] = useState('light')

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

      <div className="content tp">
        <div className="cover">
          <img src={login[theme]} alt="theme"/>
        </div>
        <div className="login">
          <h4>E aí, Skorean!</h4>
          <h1>Que bom ter você por aqui!</h1>
          <p>Faça o seu login para continuar</p>
          <button type="button">
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
