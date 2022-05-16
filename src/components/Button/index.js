import PropTypes from "prop-types"
import {FaAngleRight, FaRegBookmark} from 'react-icons/fa'
import './button.css'

function Button ( {text, icon='', disable=false, theme, caret=false} ) {
    return (
        <button className={`button ${theme ?? theme}`} disabled={disable}>
            {icon && <FaRegBookmark className='padding-right' />}
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
    caret: PropTypes.bool
}

export default Button;