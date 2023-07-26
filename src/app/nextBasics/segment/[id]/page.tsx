export default function Page() {
    return <h1>All dynamic Routes here</h1>
}

export async function generateStaticParams() {
    const posts = ['abc', 'def'];
    return posts.map((post: string) => ({
      slug: post,
    }))
}