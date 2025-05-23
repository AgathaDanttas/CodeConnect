import "../styles/PaginaDeLogin.css";
import Texto from "./Texto";
import ItemRedesSociais from "./ItemRedesSociais";
import Link from "./Link";

function ContainerLinks() {
    return (
        <>
            <div className="container-links"> 
                <Texto className="container-links__titulo">ou entre com outras contas </Texto>
                <ul>
                    <ItemRedesSociais link='https://github.com' nome='Github'/>
                    <ItemRedesSociais  link='https://google.com' nome='Google'/>
                </ul>
                <Texto classeName='container-links__texto'>Ainda não tem conta?</Texto>
                <Link>Crie seu cadastro</Link>
            </div>
        </>
    );
}

export default ContainerLinks;