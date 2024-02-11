import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/utils/database';
import User from '@/models/user';

const handler = NextAuth({
  // sağlayıcılar
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // kullanıcı oturmunu alan method
    async session({ session }) {
      // aktif kullanıcın bilgilerini al
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      // kullanıcı id'si oturum bilgieri arasına ekle
      session.user.id = sessionUser._id.toString();

      return session;
    },

    // hesabas giriş yapma
    async signIn({ profile }) {
      try {
        // veritbanına bağlan
        await connectToDB();

        // kullanıcı zaten var mı kontrol et
        const userExist = await User.findOne({
          email: profile.email,
        });

        // kullanıcıyı oluştur
        if (!userExist) {
          'Furkan Evin' > 'FurkanEvin';
          await User.create({
            username: profile.name.replace(' ', '').toLowerCase(),
            email: profile.email,
            image: profile.picture,
          });
        }

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
