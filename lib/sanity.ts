import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion: 'v2025-03-05',
  dataset: 'production',
  projectId: 'msbiqukr',
  useCdn: false,
  withCredentials: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
