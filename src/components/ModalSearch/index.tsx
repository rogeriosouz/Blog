import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SearchPostsQuery } from '../../graphql/querys/SearchPosts';
import { SearchPostsType } from '../../types/types';
import { converteDate } from '../../utils/converterDate';
import * as styled from './styles';

type ModalSearchProps = {
  isActive: boolean;
  value: string;
  setActive: (args: string) => void;
};

export function ModalSearch({ isActive, value, setActive }: ModalSearchProps) {
  const { data } = useQuery<SearchPostsType>(SearchPostsQuery, {
    variables: { title_contains: value },
  });
  const { asPath } = useRouter();

  useEffect(() => {
    setActive('');
  }, [asPath]);

  return (
    <styled.ModalSearchContainer isActive={isActive}>
      {data?.posts.map((item) => (
        <Link key={item.id} href={`/post/${item.slug}`}>
          <a>
            <styled.ContentModalSearc>
              <styled.ContainerBanner>
                <styled.BannerSearc
                  src={item.coverImage.url}
                  alt={item.title}
                />
                <div>
                  <img src={item.author.picture.url} alt={item.author.name} />
                  <p>{item.author.name}</p>
                </div>
              </styled.ContainerBanner>
              <styled.ContentTexts>
                <styled.TitleSearc>{item.title}</styled.TitleSearc>
                <styled.Date>{converteDate(item.date)}</styled.Date>
                <styled.Description>{item.description}</styled.Description>
              </styled.ContentTexts>
            </styled.ContentModalSearc>
          </a>
        </Link>
      ))}
    </styled.ModalSearchContainer>
  );
}
