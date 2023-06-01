const ConatactPage: React.FC = () => {
    return (
        <div className="h-screen flex">
            <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">MD Blog</h1>
                    <p className="text-white mt-1">Join our news letter or contact us, it{'\'s'} all a click away</p>

                </div>
            </div>
            <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-200  dark:bg-gray-800">
                <div>
                    <h1 className="text-gray-800 dark:text-white font-bold text-2xl mb-1">What is on your mind?</h1>

                    <textarea rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." />

                    <button className="block w-full   bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ConatactPage;