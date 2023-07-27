/* The generateStaticParams function can be used in combination 
** with dynamic route segments to statically generate routes at 
** build time instead of on-demand at request time.
*/

export default function Page({ params }: { params: { slug: [string] } }) {
    return <h1> Catch all dynamic segments: {params.slug.join(' ')} </h1>
}