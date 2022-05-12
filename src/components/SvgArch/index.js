import sampleText from '../../assets/sampleText.svg'
import './svgArch.css'

export default function SvgArch(){

    return (
        <div className="arch-container">
            <img src={sampleText} className="arch-svg"/>
            <input id="sliderComponent" className="slider" defaultValue="0" type="range" min="0" max="100" step="5" />
        </div>

    )
}