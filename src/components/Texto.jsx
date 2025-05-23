import PropTypes from "prop-types";

function Texto({classe,children}) {
    return (
        <p className={classe}>{children}</p>
    )    
}

Texto.propTypes= {
  classe: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default Texto;
