import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
};

export const _Title: React.FC<Props> = ({
  title = 'Rick and Morty',
}: Props) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);
