
const Page = () => {
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-slight-light-blue focus:border-custom-slight-light-blue sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-slight-light-blue focus:border-custom-slight-light-blue sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-custom-slight-light-blue text-white font-semibold rounded-md shadow-sm hover:bg-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-slight-light-blue focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/register" className="font-medium text-custom-slight-light-blue hover:text-custom-slight-light-blue">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Page;
