import React from 'react'

import { useAuth } from '../../hooks/useAuth'

const HomePage = () => {
  const {authState} = useAuth();
  console.log(authState);
  
  return (
   <>
    
    <div>HomePage</div>
   </>
  )
}

export default HomePage