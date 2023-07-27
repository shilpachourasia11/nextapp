/* The generateStaticParams function can be used in combination 
** with dynamic route segments to statically generate routes at 
** build time instead of on-demand at request time.
*/

export default function Page({ params }: { params: { id: string } }) {
    return <h1> All dynamic Routes here: {params.id} </h1>
}

export async function generateStaticParams() {
    const posts = ['abc', 'def'];
    return posts.map((post: string) => ({
      slug: post,
    }))
}