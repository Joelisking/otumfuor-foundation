/* eslint-disable @next/next/no-img-element */
import { client, urlFor } from '@/lib/sanity';
import { INewsArticle } from '@/lib/types';
import { PortableText } from 'next-sanity';
import BackButton from '@/components/shared/back-button';

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: INewsArticle = await getData(id);

  return {
    title: data?.title,
    description: data?.smallDescription,
  };
}

async function getData(id: string) {
  const query = `
    *[_type == "stories" && slug.current == '${id}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      additionalImages
    }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

const components = {
  types: {
    inlineImage: ({ value }: { value: any }) => {
      return (
        <div className="flex justify-center my-8">
          <img
            src={urlFor(value).url()}
            alt="Inline content image"
            className="max-w-full h-auto rounded-lg border"
            style={{ maxHeight: '600px' }}
          />
        </div>
      );
    },
  },
};

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: INewsArticle = await getData(id);

  return (
    <main className="px-8 lg:px-0 max-w-7xl mx-auto my-16">
      <BackButton />

      <h1 className="max-w-4xl mx-auto">
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data?.title}
        </span>
      </h1>

      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-center">
          <img
            src={urlFor(data?.titleImage)?.url()}
            alt="Primary Banner Image"
            className="rounded-lg mt-8 border max-w-full h-auto"
            style={{ maxHeight: '600px' }}
          />
        </div>
      </div>

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data?.content} components={components} />
      </div>

      {data?.additionalImages && data.additionalImages.length > 0 && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.additionalImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={urlFor(image).url()}
                alt={`Additional image ${index + 1}`}
                className="rounded-lg border max-w-full h-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
