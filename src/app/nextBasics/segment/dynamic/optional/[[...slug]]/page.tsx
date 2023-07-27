/**
 * optional/ also works for optional [[...slug]] but doesnt for [...slug]
 */

import SuspensedComponent from '../../../components/SuspensedComponent/SuspensedComponent';

export default function Page({ params }: { params: { slug?: [string] } }) {
    return (
        <div>
            <h1> Catch all Optional dynamic segment: {params.slug?.join('/')} </h1>
            <SuspensedComponent/>
        </div>
    )
}