import { Suspense } from "react";
import TimedComponent from '../TimedComponent/TimedComponent';

const SuspensedComponent = () => {
    return (
        <Suspense fallback={<p>Loading feed...</p>}>
            <TimedComponent />
        </Suspense>
    )
}

export default SuspensedComponent;