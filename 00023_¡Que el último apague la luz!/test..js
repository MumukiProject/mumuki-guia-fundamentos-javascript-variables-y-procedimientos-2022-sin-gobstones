it("si la mochila estaba abierta, al ejecutar usarCierre pasa a estar cerrada", function() {
  usarCierre();
  assert.equal(mochilaAbierta, false);
})

it("si la mochila estaba cerrada, al ejecutar usarCierre pasa a estar abierta", function() {
  mochilaAbierta = false;
  usarCierre();
  assert.equal(mochilaAbierta, true);
})

it("si la mochila estaba abierta, al ejecutar usarCierre dos veces sigue estando abierta", function() {
  usarCierre();
  usarCierre();
  assert.equal(mochilaAbierta, true);
})