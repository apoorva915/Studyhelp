'use client';

import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import { checkAndInsertUser } from '@/actions/user';
import axios from 'axios';

export default function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    const run = async () => {
      if (user) {
        //made a seperate function in actions/user.js because it was giving error
        // await checkAndInsertUser(
        //   user.primaryEmailAddress?.emailAddress || '',
        //   user.fullName
        // );
        const res=await axios.post('/api/create-user',{
          user: {
            id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName,
            image: user.imageUrl,
          },
        });
        console.log(res.data);
      }
    };
    run();
  }, [user]);

  return <div>{children}</div>;
}
