import '../styles/PaginaDeLogin.css'
import PropTypes from 'prop-types';

function Link({ children }) {
    return (
        <a href="#" className="container-links__link">
            {children}
        </a>
    );
}

Link.propTypes= {
  children: PropTypes.node.isRequired,
  
};

export default Link;