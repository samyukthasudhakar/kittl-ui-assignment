import React, { useRef, useState} from 'react';

import { warpImage } from 'utils/warpImage';
import './svgArc.css'

export default function SvgArc({ imageSrc }){

    const imgRef = useRef(null)
    const canvasRef = useRef(null)
    const [warpAmount, setWarpAmount ] = useState(0)

    function changeArcStrength(e){
        /*
        When arc strength value is changed, an image warped based on the 
        arc strength value is obtained and updated in the UI in place of the 
        display image
        */
        setWarpAmount(e.target.value)
        let image_to_warp = new Image()
        image_to_warp.onload = function () {
            let warp_canvas = warpImage(image_to_warp, warpAmount, canvasRef)
            imgRef.current.src = warp_canvas
        }
        image_to_warp.src = imageSrc	
    }

    return(
        <div>
            <div className="img-container">
                <img src={imageSrc} ref={imgRef} className="img"/>
                <canvas id="canvas" ref={canvasRef} style={{display:"none"}}></canvas>
            </div>
            <input className="slider" onChange={(e)=>changeArcStrength(e)} type="range" defaultValue="1" min="0" max="2" step="0.01" />
        </div>

    )
}