import React from 'react'

const Call = () => {
  return (
    <section>
	<div className="dark:bg-blue-400 m-10 rounded-3xl">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="md:text-5xl xs:text-3xl font-bold leading-5 sm:text-4xl xl:max-w-3xl dark:text-gray-100">Ready to Transform Your Vision into Reality? Let's Get Started!</h1>
			
			<div className="flex flex-wrap justify-center pt-10">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded-full dark:bg-gray-100 dark:text-gray-50">Schedule a call</button>
			</div>
		</div>
	</div>
	<img src="/call.png" alt="" className="w-1/2 mx-auto mb-12 -mt-20 rounded-lg lg:-mt-40"/>
</section>
  )
}

export default Call