// Shared UI for a segment and its children

export default function Layout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <div className="text-3xl font-bold underline">
                Hello i am your layout
            </div>
            <div>{children}</div>
        </div>
    )
}
