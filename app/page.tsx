'use client';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="xs:pt-10 bg-white pb-14 pt-0 sm:pt-16 lg:overflow-hidden lg:py-24">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block text-pink-500">
                      Welcome to my Next.js
                    </span>
                    <span className="block text-black">Demo Website</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Deployed on AWS Amplify
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="lg:flex">
                      <div className="mt-3 sm:mt-0">
                        <button
                          onClick={() => {
                            // eslint-disable-next-line no-alert
                            alert('Thanks for visiting thsi demo website');
                          }}
                          className="block w-full rounded-md bg-pink-500 px-4 py-3 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Contact US
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="mt-12 hidden lg:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className=""
                  src="https://user-images.githubusercontent.com/1884712/202186141-9f8a93e1-7743-459a-bc95-b1d826931624.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xs:py-12 mx-auto max-w-7xl overflow-hidden p-4 sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-400">
            © 2023 Tech Bay. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
