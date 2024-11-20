"use client";

export const runtime = 'edge';

export default async function Home() {

    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center lg:h-dvh max-lg:h-[calc(100svh-4rem)]">
                <h1 className="text-4xl font-bold">Welcome to Suncoast Systems</h1>
                <p className="text-lg">Exploring Engineering Technology</p>
            </div>
        </>
    )
}