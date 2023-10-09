import './PagNaoEncontrada.css';
import fundoErro from '../../assets/PaginaErro.png'


function PagNaoEncontrada() {
    return (
        <>
        <div className="fullscreen-image">
                <img
                    src={fundoErro}
                    alt="Imagem em tela cheia"
                    className="fullscreen-image__img"
                />
            </div>
        </>
    );
}

export default PagNaoEncontrada;
