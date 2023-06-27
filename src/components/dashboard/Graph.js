import React from 'react'

const Graph = () => {
  return (
    <div className="mt-0 w-full max-w-full px-3 lg:w-full lg:flex-none ">
    <div className="bg-gray-100 border-black-125 shadow-soft-xl dark:shadow-soft-dark-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
      <div className="border-black-125 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
        <h6 className="dark:text-white">Sales overview</h6>
        <p className="text-sm leading-normal dark:opacity-60">
          <i className="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
          <span className="font-semibold">4% more</span> in 2021
        </p>
      </div>
      <div className="flex-auto p-4">
        <div>
          <canvas id="chart-line" height="300"></canvas>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Graph