import PropTypes from "prop-types"
import {FaAngleRight, FaRegBookmark} from 'react-icons/fa'
import './button.css'

function Button ( {text, icon='', disable=false, theme, caret=false, onClick} ) {
    return (
        <button onClick={onClick} className={`button ${theme && theme}`} disabled={disable}>
            {icon && icon}
            <span>{text}</span>
            {caret && <FaAngleRight className="padding-left"/>}
        </button>
    )
}

Button.prototypes = {
    text: PropTypes.string,
    icon: PropTypes.node,
    disable: PropTypes.bool,
    theme: PropTypes.string,
    caret: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button;