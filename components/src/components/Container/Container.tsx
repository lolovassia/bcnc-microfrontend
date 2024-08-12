import { ContainerStyled } from '@components/Container/Container.styled';

import React, { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
