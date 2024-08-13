import { ReturnStyled } from '@components/Return/Return.styled';
import { ReturnProps } from '@components/Return/Return.types';

import * as React from 'react';

export default function Return({ onClick }: ReturnProps) {
  return <ReturnStyled onClick={onClick}>Volver</ReturnStyled>;
}
