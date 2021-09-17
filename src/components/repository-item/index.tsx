import React from 'react';
import * as S from './styled';

interface IRepositoryItemProps {
  name: string;
  linkToRepo: string;
  fullName: string;
}

const RepositoryItem: React.FC<IRepositoryItemProps> = ({
  name,
  linkToRepo,
  fullName,
}) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Acesse:</S.WrapperFullName>
      <S.WrapperLink
        href={`${'https://github.com/'}${linkToRepo}`}
        target="_blank"
        rel="noreferrer"
      >
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
