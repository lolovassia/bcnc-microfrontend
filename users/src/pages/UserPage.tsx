import { useNavigate } from 'react-router-dom';

import * as React from 'react';

import { useUsers } from '@/hooks/useUsers';
import { CenteredContainerStyled, TitleStyled } from '@/styled/UserPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));
const Return = React.lazy(() => import('components/Return'));

export default function UserPage() {
  const navigate = useNavigate();

  const { users, columns, isInitialLoading } = useUsers();

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate('/')} />
        <TitleStyled>Página renderizada por microservicio - Users</TitleStyled>
        <TitleStyled>
          Listado renderizado por microservicio - Components
        </TitleStyled>
        <Table data={users} columns={columns} loading={isInitialLoading} />
      </CenteredContainerStyled>
    </Container>
  );
}
