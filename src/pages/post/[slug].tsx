import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import client from '../../api/apoloClient';
import { PostQuery } from '../../graphql/querys/PostQuery';
import { PostType } from '../../types/types';
import * as styled from './styles';

type PostProps = {
  data: PostType;
};

export default function Post({ data }: PostProps) {
  return (
    <styled.ContainerPost>
      <styled.Banner>
        <img src={data?.post.coverImage.url} alt={data?.post.title} />

        <styled.LineBanner />
      </styled.Banner>

      <styled.AuthorContent>
        <Link href={`/author/${data.post.author.id}`}>
          <a>
            <img
              src={data?.post.author.picture.url}
              alt={data?.post.author.name}
            />

            <p>{data?.post.author.name}</p>
          </a>
        </Link>
      </styled.AuthorContent>

      <styled.TitleContent>{data?.post.title}</styled.TitleContent>
      <styled.ContentPost
        dangerouslySetInnerHTML={{ __html: data?.post.content.html as string }}
      />
    </styled.ContainerPost>
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
      query: PostQuery,
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
