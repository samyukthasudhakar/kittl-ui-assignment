import {FaAngleRight, FaRegBookmark} from 'react-icons/fa'
import './button.css'

export default function Button ( {text, icon='', disable=false, theme, caret=false} ) {
    return (
        <button className={`button ${theme ?? theme}`} disabled={disable}>
            {icon && <FaRegBookmark className='padding-right' />}
            <span>{text}</span>
            {caret && <FaAngleRight className="padding-left"/>}
        </button>
    )
}