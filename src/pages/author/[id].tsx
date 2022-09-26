import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import client from '../../api/apoloClient';
import { PostCard } from '../../components/PostCard';
import { AuthorQuery } from '../../graphql/querys/AuthorQuery';
import { AuthorType } from '../../types/types';
import * as styled from './styles';

type AuthorPorps = {
  data: AuthorType;
};

export default function Author({ data }: AuthorPorps) {
  const [quantPerPage, setQuantPerPage] = useState(10);
  const filterPost = data.author.posts.slice(0, quantPerPage);

  return (
    <styled.ContainerAuthor>
      <styled.ContentAuthor>
        <img src={data?.author.picture.url} alt={data?.author.name} />
        <div>
          <h1>{data?.author.name}</h1>
          <p>{data?.author.biography}</p>
          <span>Total de postagem: {data?.author.posts.length}</span>
        </div>
      </styled.ContentAuthor>
      <styled.TitlePosts>Todos os posts</styled.TitlePosts>
      <styled.GridPostAuthor>
        {filterPost?.map((item) => (
          <PostCard
            key={item.id}
            date={item.date}
            slug={item.slug}
            subTilte={item.description}
            title={item.title}
            urlBanner={item.coverImage.url}
          />
        ))}
      </styled.GridPostAuthor>
      {data.author.posts.length > quantPerPage && (
        <styled.AddPostsPagination>
          <button onClick={() => setQuantPerPage((v) => v + v)}>
            carregar mais posts
          </button>
        </styled.AddPostsPagination>
      )}
    </styled.ContainerAuthor>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await client.query({
      query: AuthorQuery,
      variables: { id: params?.id },
    });

    return {
      props: {
        data,
      },
      revalidate: 60 * 60 * 4, // 4 hours
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
