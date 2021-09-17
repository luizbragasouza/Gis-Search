/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks';

const Header: React.FC = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState<string>();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  const submitTrash = () => {
    window.location.reload();
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => {
            setUsernameForSearch(event.currentTarget.value);
          }}
        />
        <button className="buscar" type="submit" onClick={submitGetUser}>
          <div>
            <i className="fa fa-search" />
            <span style={{ marginLeft: '0.3rem' }}> Buscar</span>
          </div>
        </button>
        <button className="limpar" type="submit" onClick={submitTrash}>
          <div>
            <i className="fa fa-trash" />
            <span style={{ marginLeft: '0.3rem' }}> Limpar</span>
          </div>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
