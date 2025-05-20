import "../styles/CampoDeDigitacao.css";
import PropTypes from "prop-types";

function CampoDeDigitacao({ label, tipo, placeholder }) {
  return (
    <div className="form__campo-digitacao">
      <label htmlFor={tipo}>{label}</label>

      <input type={tipo} placeholder={placeholder} required id={tipo} />
    </div>
  );
}

// Validação das props
CampoDeDigitacao.propTypes = {
  label: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

// Valores padrão para props opcionais
CampoDeDigitacao.defaultProps = {
  placeholder: "",
};
export default CampoDeDigitacao;
