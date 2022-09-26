import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import client from '../../api/apoloClient';
import { PostCard } from '../../components/PostCard';
import { CategoryQuery } from '../../graphql/querys/CategoryQuery';
import { CategoryType } from '../../types/types';
import * as styled from './styles';

type CategoryProps = {
  data: CategoryType;
};

export default function Category({ data }: CategoryProps) {
  const [quantPerPage, setQuantPerPage] = useState(10);
  const filterPost = data.category.posts.slice(0, quantPerPage);
  return (
    <styled.ContainerCategory>
      {filterPost?.map((item) => (
        <PostCard
          key={item.id}
          date={item.date}
          slug={item.slug}
          urlBanner={item.coverImage.url}
          subTilte={item.description}
          title={item.title}
        />
      ))}

      {data.category.posts.length > quantPerPage && (
        <styled.AddPostsPagination>
          <button onClick={() => setQuantPerPage((v) => v + v)}>
            carregar mais posts
          </button>
        </styled.AddPostsPagination>
      )}
    </styled.ContainerCategory>
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
      query: CategoryQuery,
      variables: { slug: params?.slug },
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
