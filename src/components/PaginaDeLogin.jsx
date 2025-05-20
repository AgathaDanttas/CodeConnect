import "../styles/PaginaDeLogin.css";
import PropTypes from "prop-types";

function PaginaDeLogin({ children }) {
  return (
    <div className="container-login  ">
      <img
        src="/img/imagem-login.png"
        alt="mulher negra de cabelos crespos, com oculos mechendo no computador e a logo da codeconnect"
      />
      <section>
        <form>{children}</form>
      </section>
    </div>
  );
}

// Definição dos tipos esperados para as props
PaginaDeLogin.propTypes = {
  children: PropTypes.node.isRequired, // 'node' aceita qualquer conteúdo renderizável (elementos, strings, etc.)
};

export default PaginaDeLogin;
