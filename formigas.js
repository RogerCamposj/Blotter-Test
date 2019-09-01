var text = new Blotter.Text("FORMIGAS", {
    family: 'Montserrat', 
    size: 150,
    fill: "#000",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80,
})

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = .5;
material.uniforms.uSpeed.value = 2;


var blotter = new Blotter(material, {
    texts: text
})

var scope = blotter.forText(text);

scope.appendTo(document.body)