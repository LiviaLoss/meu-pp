import './FPagCadastroProfissional.css'

import titulo from '../../assets/letreiroConta.png';
import fundo from '../../assets/fundo.png'
// import icon from '../../assets/iconeLogin.png'
import Header from '../../components/Header/Header'
import iconeMais from '../../assets/iconeMais.png'

function FPagCadastroProfissional() {
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
         
        {/* <div className='icon'>
          <img src={icon} alt="icon" className='icon' />
        </div> */}

        <form>
        <div className="inputContainer">
            <label htmlFor=""></label>
            <input
              type="text"
              name="apelido"
              id="apelido"
              placeholder="Como você quer ser chamado"
            />
          </div>

          <div className="inputContainer">
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor=""></label>
            <input
              type="varchar"
              name="senha"
              id="senha"
              placeholder="Senha"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor=""></label>
            <input
              type="varchar"
              name="Confirmar senha"
              id="Confirmar senha"
              placeholder="Confirmar senha"
            />
          </div>  

          <div className='iconeMais'>
          <img src={iconeMais} alt="icone de adicionar imagem" className='iconeMais' />
        </div>

        <div className='TextoCFP'>
            <text>CFP</text>
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

export default FPagCadastroProfissional;
