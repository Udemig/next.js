'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Form from '@/components/Form';

export type PostType = {
  prompt: string;
  tag: string;
};

const CreatePrompt = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>({
    prompt: '',
    tag: '',
  });

  const { data: session } = useSession();
  const router = useRouter();

  const createPrompt = async (e: FormEvent) => {
    e.preventDefault();
    // yükleniyoru true'ya çek
    setIsSubmitting(true);

    try {
      // gönderi oluşturmak için api isteği at
      const res = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          // @ts-ignore
          userId: session?.user.id,
        }),
      });

      // işlem başarılıysa anasyafaya yönlendir
      if (res.ok) {
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    } finally {
      // yükleniyoru false'a çek
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="create"
      post={post}
      setPost={setPost}
      submitting={isSubmitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
