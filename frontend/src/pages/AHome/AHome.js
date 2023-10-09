import './AHome.css';
import Header from '../../components/Header/index';
import fundo from '../../assets/fundo.png'
import abraco from '../../assets/iconeAbraco.png'
import tituloprincipal from '../../assets/letreiroUm.png'

function AHome() {

    return (
        <>
            <Header />
            <div className='containercompleto'>
            </div>

            <div className="imagemunica">
                <img
                    src={abraco}
                    alt="capa"
                    className="imagemunica"
                />
            </div>

            <div className="fullscreen-image">
                <img
                    src={fundo}
                    alt="Imagem em tela cheia"
                    className="fullscreen-image__img"
                />
            </div>

            <div className="tituloprincipal">
                <img
                    src={tituloprincipal}
                    alt="titulo de bem vindo"
                    className="tituloprincipal"
                />
            </div>

            <button id="meuBotao">Entrar</button>

        </>
    );
}

export default AHome;
