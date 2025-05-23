import PropTypes from "prop-types";

function ItemRedesSociais({ link, nome }) {
    return (
        <li>
            <a href={link}>
                <img src={`/img/${nome}.svg`} alt={`icone do ${nome}`} />
                {nome}
            </a>
        </li>
    )
}

ItemRedesSociais.propTypes= {
  link: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};


export default ItemRedesSociais; 