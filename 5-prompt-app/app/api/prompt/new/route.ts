import { Prompt } from '@/models/prompt';
import { connectToDB } from '@/utils/database';

type PostData = {
  userId: string;
  prompt: string;
  tag: string;
};

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  try {
    // veritbanına bağlan
    await connectToDB();

    // yeni gönderi oluştur
    const newPrompt = new Prompt({
      creator: body.userId,
      tag: body.tag,
      prompt: body.prompt,
    });

    // veritabanına kaydet
    await newPrompt.save();

    // client'a cevap gönder
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response('Prompt oluştururken hata meydana geldi', {
      status: 500,
    });
  }
};
