import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import { useState } from 'react';
import client from '../api/apoloClient';
import { PostCard } from '../components/PostCard';
import { AllpostsQuery } from '../graphql/querys/AllpostsQuery';
import { AllPostsType } from '../types/types';
import { converteDate } from '../utils/converterDate';
import { radomPosts } from '../utils/radomPosts';

import * as styled from './styles';

type Hometype = {
  data: AllPostsType;
  loading: boolean;
};

export default function Home({ data, loading }: Hometype) {
  const [quantPerPage, setQuantPerPage] = useState(10);

  let radom: any = radomPosts(data as AllPostsType);

  if (loading) {
    return <div>loading..</div>;
  }

  const filterPost = data.posts.slice(0, quantPerPage);

  return (
    <>
      <styled.ConteinerHome>
        <styled.ContentHome>
          <styled.Textgrup>
            <h1>{data?.posts[radom[0]].title}</h1>
            <p>{data?.posts[radom[0]].description}</p>

            <Link href={`/post/${data?.posts[radom[0]].slug}`}>
              <a>
                Veja mais
                <ArrowRight size={24} weight="thin" color="#4FFF4B" />
              </a>
            </Link>
          </styled.Textgrup>
          <styled.FeaturedImg
            src={data?.posts[radom[0]].coverImage.url}
            alt={data?.posts[radom[0]].title}
          />
        </styled.ContentHome>

        <styled.LineBotom />
      </styled.ConteinerHome>

      <styled.DestaquesPosts>
        <Link href={`/post/${data?.posts[radom[1]].slug}`}>
          <styled.PostDestaque>
            <img
              src={data?.posts[radom[1]].coverImage.url}
              alt={data?.posts[radom[1]].title}
            />

            <span>{converteDate(data?.posts[radom[1]].date as string)}</span>

            <h2>{data?.posts[radom[1]].title}</h2>

            <p>{data?.posts[radom[1]].description}</p>
          </styled.PostDestaque>
        </Link>
        <styled.sidePosts>
          <Link href={`/post/${data?.posts[radom[2]].slug}`}>
            <div>
              <span>{converteDate(data?.posts[radom[2]].date as string)}</span>

              <h2>{data?.posts[radom[2]].title}</h2>

              <p>{data?.posts[radom[2]].description}</p>
            </div>
          </Link>

          <Link href={`/post/${data?.posts[radom[3]].slug}`}>
            <div>
              <span>{converteDate(data?.posts[radom[3]].date as string)}</span>

              <h2>{data?.posts[radom[3]].title}</h2>

              <p>{data?.posts[radom[3]].description}</p>
            </div>
          </Link>
        </styled.sidePosts>
      </styled.DestaquesPosts>

      <styled.ContainerPosts>
        {filterPost?.map((item) => (
          <PostCard
            slug={item.slug}
            key={item.id}
            date={item.date}
            subTilte={item.description}
            title={item.title}
            urlBanner={item.coverImage.url}
          />
        ))}
      </styled.ContainerPosts>
      {data.posts.length > quantPerPage && (
        <styled.AddPostsPagination>
          <button onClick={() => setQuantPerPage((v) => v + v)}>
            carregar mais posts
          </button>
        </styled.AddPostsPagination>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data, loading } = await client.query({ query: AllpostsQuery });

    return {
      props: {
        data,
        loading,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {},
      revalidate: 60 * 60 * 4, // 4 hours
    };
  }
};
