import React, { useRef, useEffect, useState} from 'react';
import sampleText from '../../assets/sampleText.svg'
import { warpImage, warpImageNow } from '../../utils/warpImage';
import './svgArch.css'

export default function SvgArch(){

    const imgRef = useRef(null)
    const canvasRef = useRef(null)
    const [warpAmount, setWarpAmount ] = useState(0)
    var warp_canvas
    var warp_context
    useEffect(()=>{
        warp_canvas  = canvasRef.current
        warp_context = warp_canvas.getContext('2d')
    })

    function onChangeHandler(e){
        setWarpAmount(e.target.value)
        var invert = true
        // if(warpAmount <= 2) 
        // {
        //     invert = true
        //     setWarpAmount(2 - warpAmount)
        // }
        var image_to_warp = new Image()
        image_to_warp.onload = function () {
            let warp_canvas = warpImage(image_to_warp, warpAmount, invert, canvasRef)
            imgRef.current.src = warp_canvas
        }
        image_to_warp.src = sampleText	
    }

    return(
        <div className="arch-container">
            <img src={sampleText} ref={imgRef} className="arch-svg"/>
            <input className="slider" onChange={(e)=>onChangeHandler(e)} type="range" defaultValue="1" min="0" max="2" step="0.01" />
            <canvas id="canvas" ref={canvasRef}></canvas>
        </div>

    )
}