import React from "react";
import { InputField } from "../../components/fields/InputField";
import logoCar from "../../assets/img/ev-logo-neww.png"

const Login = () => {
  return (
   
    <section className="flex justify-center">
  <div className="h-screen">
    <div className="items-center justify-center bg-white">
      <div className="w-full">
        <div className="block rounded-lg">
          <div className="lg:flex lg:flex-wrap">
            <div className="lg:flex items-center rounded-lg bg-gray-300 h-screen lg:w-6/12 hidden">
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-2xl font-bold text-black">
                  Delivering 100'000s of NEW qualified leads to Electric Car Manufactures every month
                </h4>
                <p className="text-xl text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="px-4 md:px-0 lg:w-6/12 mt-32">
              <div className="md:mx-6 md:p-12">
                <div className="text-center mb-8">
                  <h4 className=" mt-1 pb-1 sm:text-2xl text-xl font-semibold">
                    Welcome Back!
                  </h4>
                  <p className="mb-4">Please login to your account</p>
                </div>

                <form>
                 

                  <div className="mb-10">
                    <InputField placeholder="Username" />
                  </div>
                  <div className="mb-10">
                    <InputField placeholder="Password" type="password" />
                  </div>

                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="focus:border-danger-600 inline-block w-full rounded-xl bg-gray-900 py-4 text-xl text-white hover:bg-gray-800 mb-4"
                      type="button"
                    >
                      Log in
                    </button>
                    <p className="mb-0 mr-2 mt-10">Don't have an account yet?</p>
                    <a href="#!" className="text-black sm:text-xl text-sm underline">
                      Please contact the EV Showroom Admin
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src={logoCar}
      alt="Logo"
      className="absolute top-0 left-6 mt-4 mr-4 w-24 h-16"
    />
  </div>
</section>

  
  );
};

export default Login;
