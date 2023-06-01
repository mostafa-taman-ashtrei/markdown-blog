"use client"
import Link from "next/link";
import ThemeToggle from "@/app/components/navbar/ThemeToggle";
import useThemeMode from "@/app/hooks/useThemeMode";

const HorizontalNav: React.FC = () => {
    const [colorMode] = useThemeMode()

    return (
        <nav className="bg-gray-200 p-1 border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <div className="flex flex-row  items-center justify-between mx-auto">
                <Link href="/">
                    <h1
                        className="text-lg font-semibold tracking-widest text-gray-900 dark:text-gray-400 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                    >
                        MD BLOG
                    </h1>
                </Link>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
                </button>


                <div className="flex-col flex-grow  pb-4 md:pb-0 md:flex md:justify-end md:flex-row hidden w-full  md:w-auto">
                    <Link href="/contact">
                        <h1 className="px-4 py-1  text-gray-900 dark:text-gray-400  font-semibold rounded-lg  dark-mode:hover:bg-gray-300 dark-mode:focus:bg-gray-900 dark-mode:focus:text-white dark-mode:hover:bg-gray-300 dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-500  dark:hover:text-gray-700 hover:underline">
                            Contact Us
                        </h1>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default HorizontalNav;