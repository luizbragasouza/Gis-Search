/* eslint-disable no-debugger */
import React from 'react';
import { Alert } from 'reactstrap';
import * as S from './styled';

interface INotificationProps {
  type: 'danger' | 'success' | 'warning' | 'info';
  text: string;
}

const Notification: React.FC<INotificationProps> = ({ type, text }) => {
  return (
    <S.Wrapper>
      <Alert color={type}>{text}</Alert>
    </S.Wrapper>
  );
};

export default Notification;
