

export default function Home() {
  

  const isServer = typeof window === 'undefined';
  if(isServer){
   return 'Message from a Server!!!!!'
  } else {
    return 'Message from a Client'
  }

}


