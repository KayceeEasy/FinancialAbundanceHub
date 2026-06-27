import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  featured,
  featuredImage
}
`;

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  body,
  featured,
  "category": select(
    category == "wealth" => "Wealth Building",
    category == "real-estate" => "Real Estate",
    category == "investing" => "Investing",
    category == "mindset" => "Mindset",
    "Insight"
  )
}
`;

export const FEATURED_POST_QUERY = groq`
*[_type == "post" && featured == true]
| order(publishedAt desc)[0]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  featuredImage
}
`;