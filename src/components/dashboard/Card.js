import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="shadow-soft-xl relative mb-6 flex min-w-0 flex-col break-words rounded-2xl bg-gray-100 border border-gray-300 shadow-sm">
          <div className="flex-auto p-4 ">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-2/3 max-w-full flex-none px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal">
                    Today's Money
                  </p>
                  <h5 className="mb-0 font-bold">
                    $53,000
                    <span className="font-weight-bolder text-sm leading-normal text-lime-500">
                      +55%
                    </span>
                  </h5>
                </div>
              </div>
              <div className="flex-0 ml-auto w-4/12 max-w-full px-3 text-right">
                <div className="shadow-soft-2xl inline-block h-12 w-12 rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 text-center">
                  <i
                    className="ni ni-money-coins relative top-3.5 text-lg text-white"
                 
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
