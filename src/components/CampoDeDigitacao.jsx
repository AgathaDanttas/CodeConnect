import "../styles/CampoDeDigitacao.css";
import PropTypes from "prop-types";

function CampoDeDigitacao({ label, tipo, placeholder = '',value = '',setValue }) {
  return (
    <div className="form__campo-digitacao">
      <label htmlFor={tipo}>{label}</label>
<input
  type={tipo}
  placeholder={placeholder}
  required
  id={tipo}
  value={value}
  onChange={(evento) => {setValue(evento.target.value);//é um evento que fazemos uma manipulação do que tem dentro dele
  }}
/>
    </div>
  );
}

// Validação das props
CampoDeDigitacao.propTypes = {
  label: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default CampoDeDigitacao;
