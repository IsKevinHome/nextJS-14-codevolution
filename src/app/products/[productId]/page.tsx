import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((reoslve) => {
    setTimeout(() => {
      reoslve(`iPhone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId} </h1>;
}

// export default function ProductDetails({
//   params,
// }: {
//   params: { productId: string };
// }) {
//   return <h1>Details about product {params.productId} </h1>;
// }
