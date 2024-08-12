import * as React from 'react';

import { useUsers } from '@/hooks/useUsers';

const Container = React.lazy(() => import('components/Container'));

export default function UserPage() {
  const { users } = useUsers();

  console.log('sers', users);
  return (
    <Container>
      <div>USER</div>
    </Container>
  );
}
