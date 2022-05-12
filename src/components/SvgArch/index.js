import { useState } from 'react'
import sampleText from '../../assets/sampleText-cropped1.svg'
import updated from '../../assets/updated.svg'
import './svgArch.css'

export default function SvgArch(){

    const [range, setRange] = useState(0)

    return (
        <div className="arch-container">
            <img src={sampleText} className="arch-svg"/>
            <input id="sliderComponent" className="slider" defaultValue="0" type="range" min="0" max="100" step="5" onChange={(e)=>{setRange(e.target.value)}}/>
            <span>Range value : {range}</span>
        </div>

    )
}