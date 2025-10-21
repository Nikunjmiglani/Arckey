// app/api/blogs/route.js
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...5]{
      _id,
      title,
      slug,
      publishedAt,
      "img": mainImage.asset->url,
      "desc": body[0].children[0].text
    }`;

    const blogs = await client.fetch(query);
    
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}