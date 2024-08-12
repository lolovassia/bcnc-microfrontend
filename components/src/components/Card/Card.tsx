import * as React from 'react';

import { CardProps } from './Card.types';

export default function Card({ onClick, children }: CardProps) {
  return (
    <div
      className="card bg-base-100 w-96 shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
