import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/contents/sponsors.mdx';

export const metadata: Metadata = {
  title: 'Sponsors',
};

const Page = () => {
  return (
    <Article>
      <Content />
    </Article>
  );
};

export default Page;
