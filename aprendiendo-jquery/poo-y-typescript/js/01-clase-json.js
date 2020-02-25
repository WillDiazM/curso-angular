var bicicleta={
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMax:'60km',
    CambiaColor: function(neuvo_color){
        //bicicleta.color=neuvo_color
        this.color = neuvo_color;
    }
};

bicicleta.CambiaColor("Azul");
console.log(bicicleta)