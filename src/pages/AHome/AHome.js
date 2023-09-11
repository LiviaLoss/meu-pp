import './AHome.css';
import Header from '../../components/Header/index';
import fundo from '../../assets/fundo.png'
import abraco from '../../assets/iconeAbraco.png'
import tituloprincipal from '../../assets/letreiroUm.png'
import { Link } from 'react-router-dom'

function AHome() {
    return (
        <>
            <Header />

            {/* <div className='container'>
                    <img src={abraco} alt="primeiro container colorido com logo" />
            </div> */}

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

    <Link to="/BPagInicial">
    <button id="meuBotao">Entrar</button>
    <script src="script.js"></script> 
    </Link>   
        </>
    );
}

export default AHome;
