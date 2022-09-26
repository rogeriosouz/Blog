import { X } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';
import * as styled from './styles';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue?: any;
  value: string;
  type: string;
}

export function Input({ setValue, value, type, ...rest }: SearchProps) {
  return (
    <>
      <styled.InputContainer
        type={type}
        value={value}
        {...rest}
        placeholder="Busca"
      />

      {type === 'search' && (
        <>
          {value !== '' && (
            <X
              style={{
                position: 'absolute',
                top: '25%',
                left: 'calc(100% - 30px)',
                cursor: 'pointer',
              }}
              onClick={() => setValue('')}
              size={24}
              color={'#fff'}
              weight="thin"
            />
          )}
        </>
      )}
    </>
  );
}
