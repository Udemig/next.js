import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGO_URL);

mongoose.Promise = global.Promise;

const VehicleSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  color: String,
  mileage: Number,
  fuelType: String,
  transmission: String,
  condition: String,
  imageUrl: String,
});

const Vehicle =
  mongoose.model?.Vehicle || mongoose.model('Vehicle', VehicleSchema);

export default Vehicle;
