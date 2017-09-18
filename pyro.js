
function drawSvg_pyrochlore(){

// x-y coordinates of lattice points	
dataset_dot = [{x: 31,y: 78},{x: 27,y: 25},{x: 76,y: 39},{x: 66 ,y: 69},
      			   {x: 100,y: 57},{x: 95,y: 5},{x: 145,y: 17},{x: 134,y: 48},
        		   {x: 54,y: 97},{x: 5,y: 84},{x: 9,y: 136},{x: 43,y: 125},
	 		   {x: 103,y: 110},{x: 106,y: 164},{x: 142,y: 153},{x: 152,y: 123}];

// insert a SVG canvas
var svgContainer = d3.select("body").append("svg")
	    .attr("width", 600)
	    .attr("height", 300)

// make polygons
svgContainer.append('polygon').attr({points: '31,78 27,25 76,39 66,69'})
svgContainer.append('polygon').attr({points: '100,57 95,5 145,17 134,48'})
svgContainer.append('polygon').attr({points: '54,97 5,84 9,136 43,125'})
svgContainer.append('polygon').attr({points: '103,110 106,164 142,153 152,123'})
svgContainer.append('polygon').attr({points: '54,97 66,69 100,57 103,110'})

var polyset = svgContainer.selectAll("polygon");
var polyAttributes = polyset.style({
	fill: '#ECD299', stroke: '#A42525', "stroke-width": 1, "fill-opacity": 0.4});

// make backlines
svgContainer.append('polyline').attr({points: '27,25 66,69', id:"bline"})
svgContainer.append('polyline').attr({points: '95,5 134,48', id:"bline"})
svgContainer.append('polyline').attr({points: '5,84 43,125', id:"bline"})
svgContainer.append('polyline').attr({points: '103,110 142,153', id:"bline"})
svgContainer.append('polyline').attr({points: '54,97 100,57', id:"bline"})

var backlineset = svgContainer.selectAll("polyline#bline");
var backlineAttributes = backlineset.style({
	stroke: 'gray', "stroke-width": 2, "opacity":0.3  });

// make frontlines
svgContainer.append('polyline').attr({points: '31,78 76,39', id:"fline"})
svgContainer.append('polyline').attr({points: '100,57 145,17', id:"fline"})
svgContainer.append('polyline').attr({points: '54,97 9,136', id:"fline"})
svgContainer.append('polyline').attr({points: '106,164 152,123', id:"fline"})
svgContainer.append('polyline').attr({points: '66,69 103,110', id:"fline"})

var frontlineset = svgContainer.selectAll("polyline#fline");
var frontlineAttributes = frontlineset.style({
	stroke: '#A42525', "stroke-width": 1.5, "stroke-opacity": 0.8 });


// make circles (lattice points)
var dotset = svgContainer.selectAll("circle")
		.data(dataset_dot)
		.enter()
		.append("circle")
		.on("mouseout", function() { tooltip.style("display", "none"); })
		.on("mouseover", function(d) {
			tooltip.style("display", null);
			var xPosition = d3.mouse(this)[0];
			var yPosition = d3.mouse(this)[1];
			tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
			tooltip.select("text").text("x: " + d.x + " , y: " + d.y);
						      });
var dotAttributes = dotset
		.attr("cx", function(d) {return d.x;})
		.attr("cy", function(d) {return d.y;})
		.attr("r", 5)
		.style("fill", "#B43434")
		//.style("fill", "#DA6402")
		.style("opacity", 1)


// make the tooltip (on mouse movement)
var tooltip = svgContainer.append("g")
	.attr("class", "tooltip")
	.style("display", "none");

tooltip.append("rect")
	.attr("width", 130)
	.attr("height", 30)
	.attr("fill", "white")
	.attr("opacity", 0.5);

tooltip.append("text")
	.attr("x", 10)
	.attr("dy", "1.2em")
	.style("text-anchor", "start")
	.attr("font-size", "18px")
	.attr("font-weight", "150");
}


