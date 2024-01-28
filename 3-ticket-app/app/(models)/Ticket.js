import mongoose, { Schema } from 'mongoose';

// Veritabanına bağlan
mongoose.connect(process.env.MONGODB_URL);

// asenkron işlemler için gerekli olan ayar
mongoose.Promise = global.Promise;

// Ticket veris için bir şema/model oluştur
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: String,
  },
  {
    timestamps: true,
  }
);

// Daha önce oluşturlan bir ticket modeli varsa onu kullan
// yoksa yenisini oluştur
const Ticket =
  mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
