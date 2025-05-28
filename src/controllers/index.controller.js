const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'fl0user',
    password: 'sb0Q2niyzxVk',
    database: 'Restaurant',
    port: '5432',
/*     ssl: {
        require: true,
    }, */
});


// Metodos cliente
const getCliente = async (req, res) => {
    const response = await pool.query('SELECT * FROM cliente');
    res.status(200).json(response.rows);
};

const getClienteById = async (req, res) => {
    const idcliente = req.params.idcliente;
    const response = await pool.query('SELECT * FROM cliente WHERE idcliente = $1', [idcliente]);
    res.json(response.rows);
};

const createCliente = async (req, res) => {
    const { nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura } = req.body;
    const response = await pool.query('INSERT INTO cliente (nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura]);
    console.log(response);
    res.send('cliente creado');
};

const deleteCliente = async (req, res) => {
    const idcliente = req.params.idcliente;
    const response = await pool.query('DELETE FROM cliente WHERE idcliente = $1', [idcliente]);
    console.log(response);
    res.json(`Cliente ${idcliente} eliminado correctamente`);
};

const updateCliente = async (req, res) => {
    const idcliente = req.params.idcliente;
    const { nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura } = req.body;
    const response = await pool.query('UPDATE cliente SET nombre = $1, apellidos = $2, rfc = $3, direccion = $4, zipcode = $5, montototal = $6, fecha = $7 WHERE idfactura = $8', [
        nombre, apellidos, rfc, direccion, zipcode, montototal, fecha, idfactura
    ]);
    console.log(response);
    res.json('Cliente actualizado');
};

// Metodos factura

const getFactura = async (req, res) => {
    const response = await pool.query('SELECT * FROM factura');
    res.status(200).json(response.rows);
};

const getFacturaById = async (req, res) => {
    const idfactura = req.params.idfactura;
    const response = await pool.query('SELECT * FROM factura WHERE idfactura = $1', [idfactura]);
    res.json(response.rows);
};

const createFactura = async (req, res) => {
    const { fecha, idmesero, mesa, subtotal, total } = req.body;
    const response = await pool.query('INSERT INTO factura (fecha, idmesero, mesa, subtotal, total) VALUES ($1, $2, $3, $4, $5)', [fecha, idmesero, mesa, subtotal, total]);
    console.log(response);
    res.send('factura creada');
};

const deleteFactura = async (req, res) => {
    const idfactura = req.params.idfactura;
    const response = await pool.query('DELETE FROM factura WHERE idfactura = $1', [idfactura]);
    console.log(response);
    res.json(`Factura ${idfactura} eliminada correctamente`);
};

const updateFactura = async (req, res) => {
    const idfactura = req.params.idfactura;
    const { fecha, idmesero, mesa, subtotal, total } = req.body;
    const response = await pool.query('UPDATE factura SET fecha = $1, idmesero = $2, mesa = $3, subtotal = $4, total = $5 WHERE idfactura = $6', [
        fecha, idmesero, mesa, subtotal, total, idfactura
    ]);
    console.log(response);
    res.json('Factura actualizada');
};


module.exports = {
    getCliente, getClienteById, createCliente, deleteCliente, updateCliente, getFactura, createFactura, getFacturaById, deleteFactura, updateFactura
}