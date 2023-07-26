export default function Template ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            Hi, template here!
            {children}
        </div>
    )
}
