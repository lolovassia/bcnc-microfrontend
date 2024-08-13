import { ButtonStyled } from '@components/Button/Button.styled';
import { ButtonProps } from '@components/Button/Button.types';

import * as React from 'react';

export default function Button({ onClick }: ButtonProps) {
  return <ButtonStyled onClick={onClick}>Ver</ButtonStyled>;
}
