import * as React from 'react';
import { PropsWithChildren } from 'react';

export default function Loading({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
