import SnapspotCard from "@component/ui/project-cards/SnapspotCard";

export const runtime = 'edge';

export default async function Home() {
    return (
        <>
            <div className="w-full items-center justify-center flex flex-col mt-4">
                <div className="flex flex-col gap-4 h-full w-3/4 prose lg:prose-xl">
                    <h1 className="text-4xl font-bold">Projects</h1>
                </div>
                <div className="pt-3 grid grid-cols-4 gap-4 w-3/4 pt-4">
                    <div className="col-span-4">
                        <SnapspotCard />
                    </div>
                </div>
            </div>
        </>
    )
}