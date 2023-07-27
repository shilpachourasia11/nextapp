'use client'

import { useEffect, useState } from "react"

const TimedComponent = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 4000);
    }, []);

    return (
        <div>
            {
                isReady && (
                    <div>Sorry I am late</div>
                )
            }
        </div>
    )
}

export default TimedComponent;