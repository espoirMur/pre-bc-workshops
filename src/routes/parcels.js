import express from 'express';
import uuid from 'uuid/v4';
import execute from '../db/database';

const router = express.Router();

const createTableSQL = `
    CREATE TABLE parcels IF NOT EXISTS (
      id VARCHAR(64) NOT NULL PRIMARY KEY,
      origin VARCHAR(25) NOT NULL,
      description VARCHAR(100) NOT NULL,
      destination VARCHAR(25) NOT NULL,
      order_date DATE NOT NULL
    )
  `;

router.get('/', async (req, res) => {
  const { sort, type } = req.query;
  let selectAllParcelsSQL = 'SELECT * FROM parcels';
  if (sort && type) {
    // user wants to sort, so modify the
    // selectAllParcelsSQL query above
    // sort can be the field to sort by, and type can
    // be the sort direction, either ASC or DESC
    // an example API request for this handle will be
    // /api/v1/parcels?sort=origin&type=DESC
    selectAllParcelsSQL += ''; // add the missing bit
  }

  const { rows } = await execute(selectAllParcelsSQL);
  res.status(200).send({
    parcels: rows,
  });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    const error = new Error('cannot handle request with data provided');
    error.httpStatusCode = 400;
  
    // raise this as an error so that our
    // default error handler at
    // line 15 to line 22 of server.js
    // can handler at
    next(error);
    return;
  }

  const selectAParcelsSQL = 'SELECT * FROM parcels WHERE id = $1';
  const { rows } = await execute(selectAParcelsSQL, [id]);

  res.status(200).send({
    parcel: rows[0],
  });
});

router.post('/', async (req, res, next) => {
  const { origin, description, destination } = req.body;

  // this is very simple.
  // please do better validation
  if (!origin || !description || !destination) {
    const error = new Error('cannot handle request with data provided');
    error.httpStatusCode = 400;
  
    // raise this as an error so that our
    // default error handler at
    // line 15 to line 22 of server.js
    // can handler at
    next(error);
    return;
  }

  // save in DB
  const createRecordSQL = `
    INSERT INTO parcels VALUES ($1, $2, $3, $4, $5) RETURNING id
  `;

  // we're using uuid() to generate a random but unique value
  // we can use as the Id for this record to be created
  // this only works if we created the table to have the id
  // column as a String and not Integer
  const data = [
    uuid(), origin, description, destination, new Date(),
  ];

  const result = await execute(createRecordSQL, data);

  // get back the record we just created
  const record = result.rows[0];

  // respond to the client with an appropriate HTTP status code,
  // as well as the id of the newly created Parcel
  res.status(201).send({
    success: true, parcel: record.id,
  });
});

export default router;
