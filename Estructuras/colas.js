const ordenes = ['Pizza', 'Spagetti', 'Ensalada', 'Fruta']

ordenes.push('Tacos')
console.log('Ordenes en espera',ordenes);
ordenes.shift()
ordenes.shift()
console.log('Se va a preparar', ordenes[0]);
console.log(`Tenemos ${ordenes.length} en espera`);
console.log(ordenes);