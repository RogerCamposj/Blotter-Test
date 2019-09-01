var text = new Blotter.Text("líquido", {
    family: 'Montserrat', 
    size: 100,
    fill: "#000",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80,
})

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uVolatility.value = 0.1;
material.uniforms.uSeed.value = 0;
material.uniforms.uSpeed.value = .9;


var blotter = new Blotter(material, {
    texts: text
})

var scope = blotter.forText(text);

scope.appendTo(document.body)