

export const runtime = 'edge';

export default async function Home() {
    return (
        <>
            <div className="w-full items-center justify-center flex flex-col mt-4">
                <div className="flex flex-col gap-4 h-full w-3/4 prose lg:prose-xl">
                    <div className="flex flex-col">
                        <h1>Privacy Policy</h1>
                        <div>
                            <span>
                                <span>Posted on</span>
                                <time dateTime="2024-11-19T00:00:00.000Z"> November 19, 2024</time>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2>Who We Are</h2>
                        <p>This website is operated by:</p>
                        <ul>
                            <li>Chris Lyons</li>
                            <li>Address: 2692 Enterprise Rd E, Clearwater FL, 33759 USA</li>
                        </ul>
                        <p>Our email address is <a href="mailto:administrator@suncoast.systems">administrator@suncoast.systems</a>.</p>
                        <h2>What Personal Data We Collect and Why We Collect It</h2>
                        <p>Various tools and projects collect different information depending on your interactions with them</p>
                        <p>Applications that allow or require a sign in are collecting AT LEAST a unique account identifier to associate any content you create or request with you later.</p>
                        <h3>Embedded Content From Other Websites</h3>
                        <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                        <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                        <h3>Analytics</h3>
                        <p>We track the user behavior on our site with Google Analytics.</p>
                        <h2>Who We Share Your Data With</h2>
                        <p>We do not share any personal data with any third-party.</p>
                        <h2>What Rights You Have Over Your Data</h2>
                        <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                        <h2>Where We Send Your Data</h2>
                        <p>Visitor comments may be checked through an automated spam detection service.</p>
                    </div>
                </div>
            </div>
        </>
    )
}