import mongoose from 'mongoose';

let isConnected = false; // bağlanıtyı izle

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  // eğerki zaten daha önce bağlandıysak
  // hata fonksiyonu durdur
  if (isConnected) {
    return console.log('Zaten MongDB bağlantısı var.');
  }

  // bağlanmadıysak veritbanına bağlan
  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: 'promptmaniaDB',
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;

    console.log('MONGODB BAĞLANDI');
  } catch (err) {
    console.log(err);
  }
};
