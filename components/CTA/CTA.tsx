import React from 'react'

const CTA = () => {
    return (
        <section>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-[32%,68%] sm:py-16 lg:px-6">
                <img className="w-full rounded-lg hidden lg:block" src="/images/development.png" alt="dashboard image" />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white max-w-[600px]">Want to Build Something Amazing? Let&apos;s Bring It to Life!</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 max-w-[600px]">At Reactify Solutions, we turn your ideas into exceptional applications. From concept to deployment, we are here to make your vision a reality.</p>
                    <a href='/schedule-call' className="inline-flex items-center text-white bg-primaryColor font-medium rounded-lg text-lg px-5 py-2.5 text-center">
                        Schedule a Call
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA