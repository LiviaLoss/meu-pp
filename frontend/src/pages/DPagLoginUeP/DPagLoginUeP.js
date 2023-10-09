import './DPagLoginUeP.css'

import titulo from '../../assets/letreiroLogin.png';
import fundo from '../../assets/fundo.png'
import icon from '../../assets/iconeLogin.png'
import Header from '../../components/Header/index';

function DPagLoginUeP() {
  return (
<>

    <Header />

    <div className='Quadrado'>


      <div className="fullscreen-image">
        <img
          src={fundo}
          alt="Imagem em tela cheia"
          className="fullscreen-image__img"
        />
      </div>


      <div className="container">
        <header className="header">
        </header>

        <div className='titulo'>
          <img src={titulo} alt="titulo" className='titulo' />
        </div>

        <div className='icon'>
          <img src={icon} alt="icon" className='icon' />
        </div>

        <form>
          <div className="inputContainer">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor=""></label>
            <input
              type="senha"
              name="senha"
              id="senha"
              placeholder="Senha"
            />
          </div>


          <button className="button">
            Entrar
            <img src="" alt="" />
          </button>

          <a href="">Esqueci minha senha</a>


        </form>

      </div>
    </div>
    </>
  );
}

export default DPagLoginUeP;
