function getQuadraticBezierXYatT(start_point, control_point, end_point, T) {
    let pow1minusTsquared = Math.pow(1 - T, 2)
    let powTsquared = Math.pow(T, 2)

    let x = pow1minusTsquared * start_point.x + 2 * (1 - T) * T * control_point.x + powTsquared * end_point.x
    let y = pow1minusTsquared * start_point.y + 2 * (1 - T) * T * control_point.y + powTsquared * end_point.y 
    
    return {x, y}
}

function warpImage (image_to_warp, warp_percent, canvasRef) {
    let warp_canvas = canvasRef.current,
        warp_context = warp_canvas.getContext("2d"),
        image_width  = image_to_warp.width,
        image_height = image_to_warp.height,
        warp_percentage = parseFloat(warp_percent, 10),
        invert_curve
    if(warp_percentage <= 1){
        warp_percentage = 1 - warp_percentage
        invert_curve = true
    }else{
        warp_percentage = 1 - (2 - warp_percentage)
        invert_curve = false
    }
    let warp_y_offset = warp_percentage * image_height;

    warp_canvas.width  = image_width;
    warp_canvas.height = image_height + Math.ceil(warp_y_offset * 1.5); 
     
    let start_point = {x:0, y:0}
    let control_point = {
        x: image_width / 2,
        y: invert_curve ? warp_y_offset : -warp_y_offset
    }
    let end_point = {x: image_width, y: 0}

    let offset_y_points = [], t = 0;

    for ( ; t < image_width; t++ ) {
        let xyAtT = getQuadraticBezierXYatT(start_point, control_point, end_point, t / image_width)
        let y = parseInt(xyAtT.y);
        offset_y_points.push(y);
    }

    warp_context.clearRect(0, 0, warp_canvas.width, warp_canvas.height);

    let x = 0;
    for ( ; x < image_width; x++ ) {
        warp_context.drawImage(image_to_warp,
            // clip 1 pixel wide slice from the image
            x, 0, 1, image_height + warp_y_offset,
            // draw that slice with a y-offset
            x, warp_y_offset + offset_y_points[x], 1, image_height + warp_y_offset
        );
    }

    return warp_canvas.toDataURL();	
}

export { getQuadraticBezierXYatT, warpImage }