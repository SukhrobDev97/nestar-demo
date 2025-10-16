import withLayoutBasic from '@/libs/components/layout/LayOutBasic';
import { NextPage } from 'next';
import { useState } from 'react';

const Community: NextPage = () => {
  console.log('COMMUNITY COMPONENT — PAGES ROUTER');

  const [title, setTitle] = useState<string>('hello');

  return (
    <div>
      <h1>COMMUNITY</h1>
      <button
        onClick={() => alert('Hello MIT')}
        style={{ margin: '15px' }}
      >
        Press Me
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
