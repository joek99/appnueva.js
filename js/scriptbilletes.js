let monto= +prompt('Ingrese un monto: S/.');
let billetes = {};
billetes.billete_200 = Math.trunc(monto/200);

let restante = monto - (200*Math.trunc(monto/200));
billetes.billete_100 = Math.trunc(restante/100);
restante = restante - (100*Math.trunc(restante/100));
billetes.billete_50 = Math.trunc(restante/50);
restante = restante - (50*Math.trunc(restante/50));
billetes.billete_20 = Math.trunc(restante/20);
restante = restante - (20*Math.trunc(restante/20));
billetes.billete_10 = Math.trunc(restante/10);
restante = restante - (10*Math.trunc(restante/10));



document.getElementById('monto').innerHTML = monto;
document.getElementById('billetes200').innerHTML = billetes.billete_200;
document.getElementById('billetes100').innerHTML = billetes.billete_100;
document.getElementById('billetes50').innerHTML = billetes.billete_50;
document.getElementById('billetes20').innerHTML = billetes.billete_20;
document.getElementById('billetes10').innerHTML = billetes.billete_10;