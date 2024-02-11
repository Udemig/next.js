import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email zaten kullanımda'],
  },
  username: {
    type: String,
    unique: [true, 'Kullanıcı adı zaten kullanımda'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Kullanıcı ismi geçersiz, 8-20 karakter alfanumaric karakter içermeli ve benzsersiz olmalı. ',
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', UserSchema);

export default User;
