'use client';

import type { FC } from 'react';

import { ClipLoader } from 'react-spinners';

type Props = {
  loading?: boolean;
};

const Spinner: FC<Props> = ({ loading }) => {
  return (
    <ClipLoader
      aria-label="Loading Spinner"
      color="#ed5966"
      cssOverride={{
        display: 'block',
        margin: '100px auto'
      }}
      loading={loading}
      size={150}
    />
  );
};

export default Spinner;
