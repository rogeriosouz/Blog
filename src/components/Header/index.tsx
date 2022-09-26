import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ContextTheme';
import { Input } from '../Input';
import { ModalSearch } from '../ModalSearch';
import { ModelCategory } from '../ModelCategory';
import * as styled from './styles';

export function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [clickCategory, setClickCategory] = useState(false);
  const [theme, setTheme] = useState(false);
  const { darkTheme, normalTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (clickCategory) {
      setSearchInput('');
    }

    if (!!searchInput) {
      setClickCategory(false);
    }

    if (theme) {
      darkTheme();
    } else {
      normalTheme();
    }
  }, [clickCategory, searchInput, theme]);

  return (
    <styled.ContainerHeader>
      <styled.DarkMode clickDarkMode={theme}>
        <div>
          <p>Dark mode : </p>
          <div onClick={() => setTheme((v) => !v)}>
            <button></button>
          </div>
        </div>
      </styled.DarkMode>

      <styled.ContentHeader>
        <styled.Logo>My blog</styled.Logo>
        <styled.Navigation>
          <Link href={'/'}>
            <styled.LinkNavigation isClick>home</styled.LinkNavigation>
          </Link>

          <styled.LinkNavigation
            onClick={() => setClickCategory((v) => !v)}
            isClick={false}
          >
            Categorias
          </styled.LinkNavigation>
        </styled.Navigation>
        <Input
          setValue={setSearchInput}
          type={'search'}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <ModalSearch
          value={searchInput}
          isActive={!!searchInput}
          setActive={setSearchInput}
        />
        <ModelCategory isActive={clickCategory} setClick={setClickCategory} />
      </styled.ContentHeader>
    </styled.ContainerHeader>
  );
}
