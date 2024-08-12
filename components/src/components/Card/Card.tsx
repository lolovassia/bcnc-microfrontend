import { CardStyled } from '@components/Card/Card.styled';
import { CardProps } from '@components/Card/Card.types';

import * as React from 'react';

export default function Card({ onClick, children }: CardProps) {
  return <CardStyled onClick={onClick}>{children}</CardStyled>;
}
