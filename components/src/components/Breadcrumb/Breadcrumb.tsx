import * as React from 'react';

import { BreadcrumbProps } from './Breadcrumb.types';

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {items.map(({ label, href }, i) => (
          <li key={i}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
