

export default function Page() {

    return (
        <div>
            <h1 className="font-semibold text-2xl">SiteMap</h1>

            <div className="flex flex-col">
                <a href="/" className="underline text-blue-800">Home</a>
                <a href="/login" className="underline text-blue-800">Login</a>
                <a href="/register" className="underline text-blue-800">Register</a>
                <a href="/sitemap" className="underline text-blue-800">Sitemap</a>
            </div>
        </div>
    )
}