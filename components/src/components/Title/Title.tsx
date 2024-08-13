import { TitleStyled } from '@components/Title/Title.styled';

import * as React from 'react';

export default function Title({ children }: React.PropsWithChildren) {
  return <TitleStyled>{children}</TitleStyled>;
}
