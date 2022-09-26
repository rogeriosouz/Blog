import Link from 'next/link';
import { converteDate } from '../../utils/converterDate';
import * as styled from './styles';

type PostCardProps = {
  date: string;
  title: string;
  subTilte: string;
  urlBanner: string;
  slug: string;
};

export function PostCard({
  date,
  subTilte,
  title,
  urlBanner,
  slug,
}: PostCardProps) {
  return (
    <Link href={`/post/${slug}`}>
      <styled.ContainerPostCard>
        <styled.ImgBaner src={urlBanner} alt={title} />
        <styled.Date>{converteDate(date)}</styled.Date>
        <styled.Title>{title}</styled.Title>
        <styled.SubTitle>{subTilte}</styled.SubTitle>
      </styled.ContainerPostCard>
    </Link>
  );
}
