import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { AllCategories } from '../../graphql/querys/AllCategories';
import { ALlCategoriesType } from '../../types/types';
import * as styled from './styles';

type ModelCategoryProps = {
  isActive: boolean;
  setClick: (args: boolean) => void;
};

export function ModelCategory({ isActive, setClick }: ModelCategoryProps) {
  const { data } = useQuery<ALlCategoriesType>(AllCategories);

  return (
    <styled.ContainerModelCategory isActive={isActive}>
      <styled.ContentModelCategory>
        <h2>Categorias</h2>
        {data?.categories.map((item) => (
          <Link key={item.id} href={`/category/${item.slug}`}>
            <p onClick={() => setClick(false)} key={item.id}>
              {item.name}
            </p>
          </Link>
        ))}
      </styled.ContentModelCategory>
    </styled.ContainerModelCategory>
  );
}
