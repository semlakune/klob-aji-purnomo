export default function NavBar() {
    return (
        <nav className={"bg-stone-200 border-gray-200 px-2 py-5 mb-10"}>
            <div className={"container flex flex-wrap items-center justify-between mx-auto"}>
                <img src="https://static.klob.id/img/landing-klobmeter-doors/klobicon.svg" className={"h-6 mr-3 sm:h-9"} alt="Klob Logo"/>

                <div className={"hidden w-full md:block md:w-auto"} id="navbar-default">
                    <ul className={"flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"}>
                        <li>
                            <button type={"button"} className={"hover:text-blue-600"}>Buat Lowongan</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}