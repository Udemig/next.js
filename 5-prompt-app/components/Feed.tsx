'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import { PromptType } from '@/types';

// Liste Bileşeni
type ListProp = {
  data: PromptType[] | undefined;
  handleTagClick: () => void;
};

const PromptCardList = ({ data, handleTagClick }: ListProp) => (
  <div className="mt-16 prompt_layout">
    {data?.map((post) => (
      <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
      />
    ))}
  </div>
);

// Ana Bileşen
const Feed = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [posts, setPosts] = useState<PromptType[]>();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {};

  // bileeşen kerna baısldığında veirleri al
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Prompt'ları ara"
          value={searchText}
          onChange={handleChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClik={() => {}} />
    </section>
  );
};

export default Feed;
