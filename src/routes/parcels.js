import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { sort, type } = req.query;
  const parcels = [{}, {}];

  if (sort && type) {
    // user wants to sort
    console.log(sort, type);
  }

  res.status(200).send({
    data: parcels,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const parcel = {
    id,
    name: 'ALC T-shirts',
    location: 'Kigali',
  };
  res.status(200).send({
    data: parcel,
  });
});

router.post('/', async (req, res) => {
  const { origin, description, destination } = req.body;

  // save in DB
  const parcel = {
    origin, description, destination,
  };

  res.status(201).send({
    success: true, parcel,
  });
});

export default router;
