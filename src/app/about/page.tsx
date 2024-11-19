export const runtime = 'edge';

export default async function Home() {
    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center h-full">
                <h1 className="text-4xl font-bold">Welcome to SnapSpot</h1>
                <p className="text-lg">The best place to share your memories</p>
            </div>
        </>
    )
}