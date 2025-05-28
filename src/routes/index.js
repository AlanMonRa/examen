const { Router } = require('express');
const router = Router();

const { getCliente,
        getClienteById,
        createCliente,
        getFactura,
        getFacturaById,
        createFactura,
        deleteFactura,
        updateFactura,
        deleteCliente,
        updateCliente} = require('../controllers/index.controller')


// Rutas de cliente
router.get('/cliente', getCliente);
router.get('/cliente/:idcliente', getClienteById);

router.post('/cliente', createCliente);

router.delete('/cliente/:idcliente', deleteCliente);

router.put('/cliente/:idcliente', updateCliente);

// Rutas de facutura
router.get('/factura', getFactura);
router.get('/factura/:idfactura', getFacturaById);

router.post('/factura', createFactura);

router.delete('/factura/:idfactura', deleteFactura);

router.put('/factura/:idfactura', updateFactura);

module.exports = router;
