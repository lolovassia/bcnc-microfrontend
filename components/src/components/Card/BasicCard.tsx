import * as React from 'react';

import { BasicCardProps } from './BasicCard.types';

export default function BasicCard({ onClick, children }: BasicCardProps) {
  return (
    <div
      className="card bg-base-100 w-96 shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
