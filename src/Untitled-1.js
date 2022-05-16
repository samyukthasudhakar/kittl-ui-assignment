//arch bending with slider 

// Create a new path and add a segment point to it
// at {x: 150, y: 150):
// myPath = new Paper.Path();
// myPath.add(100, 150);
// var secondPath = new Paper.Path();
// secondPath.add(100, 200)
// // Draw a curve through the position of the mouse to 'toPoint'
// var toPoint = new Paper.Point(400, 150);
// if(curveAt){
//     curveAt.remove()
//     console.log('curveAt removed')
// }
// curveAt = new Paper.Point(size.curve1.x, size.curve1.y)
// console.log('size :',size)
// myPath.curveTo(curveAt, toPoint);
// secondPath.curveTo(new Paper.Point(size.curve2.x, size.curve2.y), new Paper.Point(400,200))
// secondPath.selected = true;
// // Select the path, so we can see its segments:
// myPath.selected = true;
// var leftSide = new Paper.Path()
// leftSide.add(100,150)
// leftSide.add(100,200)
// leftSide.selected = true;
// var rightSide = new Paper.Path()
// rightSide.add(400,150)
// rightSide.add(400,200)
// rightSide.selected = true;


//slider handler function
// function onChangeHandler(event){
//     setSize({curve1:{x:size.curve1.x, y:300-parseInt(event.target.value)},curve2:{x:size.curve2.x, y:300-parseInt(event.target.value)+50}})
// }


//load image
Paper.project.importSVG(sampleText,function(item){
    // console.log(item._children[0].bounds.topLeft)
    // console.log(item._children[0].bounds.topRight)
    // console.log(item._children[0].bounds.bottomLeft)
    // console.log(item._children[0].bounds.bottomRight)
    imageHolder = item
    imageHolder.scale(0.15)
    imageHolder.position = Paper.view.center
    // imageHolder.fillColor = "red"
    imageHolder.selected = true
    imageHolder.applyMatrix = false
    console.log(item)
    
})

var y = view.size.height / 2;
var width = view.size.width;
var vector = new Point({
	angle: 45,
	length: width / 5
});
var offset = width / 30;
var handleTexts = [];
var path = new Path();
path.segments = [
	[[offset, y], null, vector.rotate(-90)],
	[[width / 2, y], vector.rotate(-180), vector],
	[[width - offset, y], vector.rotate(90), null]
];
path.fullySelected = true;

function onMouseMove(event) {
	var point = event.point.clone();
	// Constrain the event point, to not cut off the text:
	if (point.y < 22)
		point.y = 22;
	if (point.y > view.size.height - 24)
		point.y = view.size.height - 24;
	var delta = point - view.center;
	for (var i = 0; i < 2; i++) {
		var curve = path.curves[i];
		curve.handle1.y = curve.handle2.y = delta.y * (i % 2 ? 1 : -1);
		var firstPoint = curve.point1 + curve.handle1;
		var secondPoint = curve.point2 + curve.handle2;
		handleTexts[i * 2].point = secondPoint -
				(firstPoint.y < y ? [0, 10] : [0, -18]);
		handleTexts[i * 2 + 1].point = firstPoint -
				(firstPoint.y < y ? [0, 10] : [0, -18]);
	}
}

project.currentStyle.fillColor = 'black';
for (var i = 0; i < 3; i++) {
	var segment = path.segments[i];
	var text = new PointText({
		point: segment.point - [0, 10],
		content: i,
		justification: 'center'
	});
}

for (var i = 0; i < 2; i++) {
	handleTexts.push(
		new PointText({
			content: 'handleIn',
			justification: 'center'
		}),
		new PointText({
			content: 'handleOut',
			justification: 'center'
		})
	);
}

// Call onMouseMove once to correctly position the text items:
onMouseMove({ point: view.center - vector.rotate(-90) });





//the entire code
// const [size, setSize] = useState({curve1:{x:250, y:150},curve2:{x:250, y:200}})
//     const canvasRef = useRef(null)
//     const svgRef = useRef(null)
//     var myPath;
//     var curveAt;
//     Paper.setup(canvasRef.current)
//     useEffect(()=>{
//         var y = Paper.view.size.height / 2;
//         var width = Paper.view.size.width;
//         var vector = new Paper.Point({
//             angle: 40,
//             length: width / 5
//         });

//         var imgbound
//         var imgHandleBound
        
//         Paper.project.importSVG(sampleText,function(item){
//             item.scale(0.15)
//             item.position = Paper.view.center
//             console.log(item._children[1]._children)
//             var compountPath = new Paper.CompoundPath({children: item._children[1]._children})
//             // compountPath.selected = true
//             compountPath.strokeColor = "red"
//             compountPath.curveTo(new Paper.Point(100,500),new Paper.Point(100,700))
//             console.log('Compount Path : ',compountPath.bounds.width,compountPath.bounds.height)
//             console.log(compountPath.bounds.topLeft)
//             compountPath.curveTo(new Paper.Point(100,218),compountPath.bounds.topRight)
//             // item._children[1]._children.map(item => {
//             //    item._segments && item._segments.map(segment=>{
//             //        segment.handleIn = vector
//             //        segment.handleOut = vector
//             //    })
//             // })
            
//             // rotateX(90deg) skewX(10deg) rotateX(-90deg)
//             // item.rotate(90)
//             // item.skew(10)
//             // item.rotate(-90)
//             // item.rotate(90)
//             // item.skew(30)
            
//             imgbound = new Paper.Path.Rectangle(item.strokeBounds)
//             // imgbound.selected = true
//             imgHandleBound = new Paper.Path.Rectangle(item.internalBounds)
//             imgHandleBound.selected = true
//             console.log('Image internal bounds : ',imgHandleBound)
//             imgHandleBound._segments.map(segment=>{
//                 segment.handleIn = vector
//                 segment.handleOut = vector
//             })
//         })


//         // Create a new path and add a segment point to it
//         // at {x: 150, y: 150):
//         myPath = new Paper.Path();
//         myPath.add(100, 150);
//         // myPath.add(new Paper.Point(400, 150))
//         var secondPath = new Paper.Path();
//         secondPath.add(100, 200)
//         // Draw a curve through the position of the mouse to 'toPoint'
//         var toPoint = new Paper.Point(400, 150);
//         if(curveAt){
//             curveAt.remove()
//             console.log('curveAt removed')
//         }
//         curveAt = new Paper.Point(size.curve1.x, size.curve1.y)
//         myPath.curveTo(curveAt, toPoint);
//         secondPath.curveTo(new Paper.Point(size.curve2.x, size.curve2.y), new Paper.Point(400,200))
//         secondPath.selected = true;
//         // Select the path, so we can see its segments:
//         myPath.selected = true;
//         var leftSide = new Paper.Path()
//         leftSide.add(100,150)
//         leftSide.add(100,200)
//         leftSide.selected = true;
//         var rightSide = new Paper.Path()
//         rightSide.add(400,150)
//         rightSide.add(400,200)
//         rightSide.selected = true;
//     },[size])

//     function onChangeHandler(event){
//         setSize({curve1:{x:size.curve1.x, y:300-parseInt(event.target.value)},curve2:{x:size.curve2.x, y:300-parseInt(event.target.value)+50}})
//     }
    
//     return (
//         <div className="arch-container">
//             <canvas ref={canvasRef} style={{border:"solid 1px"}} >
//             </canvas>
//             {/* <img src={sampleText} ref={svgRef} className="arch-svg" id="svgArch"/> */}
//             <input className="slider" onChange={(e)=>onChangeHandler(e)} defaultValue="150" type="range" min="100" max="200" step="10" />
//             {/* <span>{`${size.x} ${size.y}`}</span> */}
//         </div>

//     )