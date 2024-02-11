import { PostType } from '@/app/create-prompt/page';
import Link from 'next/link';
import { Dispatch, FormEvent, SetStateAction } from 'react';

type FormProps = {
  type: string;
  post: PostType;
  setPost: Dispatch<SetStateAction<PostType>>;
  submitting: boolean;
  handleSubmit: (e: FormEvent) => void;
};

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: FormProps) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          Gönderi {type === 'create' && 'Oluştur'}
        </span>
      </h1>

      <p className="desc text-left max-w-md">
        Create and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Prompt'unuz
          </span>
          <textarea
            value={post.prompt}
            placeholder="Prompt'unuzu buraya giriniz"
            className="form_textarea"
            required
            onChange={(e) =>
              setPost({ ...post, prompt: e.target.value })
            }
          ></textarea>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Etiket
            <span className="font-normal">
              (#ürün, #frontend, #fikir)
            </span>
          </span>
          <input
            value={post.tag}
            placeholder="#etiket"
            className="form_input"
            required
            onChange={(e) =>
              setPost({ ...post, tag: e.target.value })
            }
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={'/'} className="text-gray-500 text-sm">
            Vazgeç
          </Link>

          <button
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange text-white rounded-full"
          >
            {submitting ? 'yükleniyor...' : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
