'use client' // all other modules imported into this file, including child components, are considered part of the client bundle

import { useState } from "react" ;
import MyServerSideCode from '../components/serverComponents/MyServerSideCode';
// import { getData } from '../lib/data'; // gives error because or server-only, counterpart is client-only 

export default function MyClientSideCode() {
    const [myState, setMyState] = useState('Hello');
    const changeGreeting = () => {
        setMyState('Yo')
        // getData(); // gives error because or server-only
    }
    console.log('i am prerendered on server and hydrated on the client side')
    return (
        <>
        <div>{myState} I am using use client to make this a client side rendered code</div>
        <button onClick={changeGreeting}>Click to change greeting</button>
        <MyServerSideCode/>
        </>
    )
}