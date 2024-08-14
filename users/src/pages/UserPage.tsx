import { useUsers } from '@hooks/useUsers';

import * as React from 'react';

import { CenteredContainerStyled } from '@/styled/UserPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));
const Title = React.lazy(() => import('components/Title'));

export default function UserPage() {
  const { users, columns, isLoading } = useUsers();

  return (
    <Container>
      <CenteredContainerStyled>
        <Title>Users list</Title>
        <Table data={users} columns={columns} loading={isLoading} />
      </CenteredContainerStyled>
    </Container>
  );
}
