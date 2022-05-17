import React, { useRef, useState} from 'react';

import sampleText from '../../assets/sampleText.svg'
import { warpImage } from '../../utils/warpImage';
import './svgArch.css'

export default function SvgArch(){

    const imgRef = useRef(null)
    const canvasRef = useRef(null)
    const [warpAmount, setWarpAmount ] = useState(0)


    function onChangeHandler(e){
        setWarpAmount(e.target.value)
        let image_to_warp = new Image()
        image_to_warp.onload = function () {
            let warp_canvas = warpImage(image_to_warp, warpAmount, canvasRef)
            imgRef.current.src = warp_canvas
        }
        image_to_warp.src = sampleText	
    }

    return(
        <div>
            <div className="img-container">
                <img src={sampleText} ref={imgRef} className="img"/>
                <canvas id="canvas" ref={canvasRef} style={{display:"none"}}></canvas>
            </div>
            <input className="slider" onChange={(e)=>onChangeHandler(e)} type="range" defaultValue="1" min="0" max="2" step="0.01" />
        </div>

    )
}