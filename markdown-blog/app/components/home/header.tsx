const Header: React.FC = () => {
    return (
        <section className="relative bg-gray-300 dark:bg-gray-900 h-screen">

            {/* Illustration behind hero content */}
            <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-black dark:text-white">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-700">MD Blog</span></h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, distinctio facere! Nostrum beatae labore quaerat quod dignissimos ea </p>
                            <button
                                className="block uppercase mx-auto shadow bg-gradient-to-r from-blue-500 to-teal-700 focus:shadow-outline focus:outline-none text-white  py-3 px-10 rounded-full"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;