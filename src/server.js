import express from 'express';
import dotenv from 'dotenv';
import parcelsRouter from './routes/parcels';

dotenv.config();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/v1/parcels/', parcelsRouter);

// catch all un handled errors from
// this entire API application
server.use((err, req, res, next) => {
  // log the error...
  const status = err.httpStatusCode || 500;
  res.status(status).send({
    success: false,
    message: err.message,
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`API server started. Listening on port ${PORT}`);
});
