import "../styles/PaginaDeLogin.css";
import PropTypes from "prop-types";

function PaginaDeLogin({email,senha, children }) {
    //sempre que manipular evento, é boa prática iniciar com handle
  const handleSubmit = (event) => {
    event.preventDefault(); //evita o comportamento padrão de atualizar a página
    console.log('email  ' + email);
    console.log('senha  ' + senha);

  }

  
  return (
    <div className="container-login  ">
      <img
        src="/img/imagem-login.png"
        alt="mulher negra de cabelos crespos, com oculos mechendo no computador e a logo da codeconnect"
      />
      <section>
        <form onSubmit={handleSubmit}>{children}</form>
      </section>
    </div>
  );
}

// Definição dos tipos esperados para as props
PaginaDeLogin.propTypes = {
  children: PropTypes.node.isRequired, // 'node' aceita qualquer conteúdo renderizável (elementos, strings, etc.)
  email: PropTypes.node.isRequired,
  senha: PropTypes.node.isREquired
};

export default PaginaDeLogin;
