import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog', // this will now ignore any suffix/prefix from the parent.
  },
};

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
    </div>
  );
}
