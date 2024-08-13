import * as React from 'react';

import { useUsers } from '@/hooks/useUsers';
import { CenteredContainerStyled, TitleStyled } from '@/styled/UserPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));

export default function UserPage() {
  const { users, columns, isLoading } = useUsers();

  return (
    <Container>
      <CenteredContainerStyled>
        <TitleStyled>
          Página renderizada por microservicios - Host, Users y Components
        </TitleStyled>
        <Table data={users} columns={columns} loading={isLoading} />
      </CenteredContainerStyled>
    </Container>
  );
}
