import React from "react";
import { InputField } from "../../components/fields/InputField";

const Login = () => {
  return (
    <div>
      <section className="flex justify-center">
        <div className="container h-full p-10">
          <div className=" items-center justify-center bg-white">
            <div className="w-full">
              <div className="dark:bg-neutral-800 block rounded-lg ">
                <div className="lg:flex lg:flex-wrap">
                  <div className="flex items-center rounded-b-lg bg-gray-400 lg:w-6/12">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>

                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Lotus Team
                        </h4>
                      </div>

                      <form>
                        <p className="mb-4">Please login to your account</p>

                        <div className="mb-10">
                         <InputField placeholder="UserName"/>
                        </div>
                        <div className="mb-10">
                        <InputField placeholder="Password"/>
                         
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="focus:border-danger-600  inline-block w-full rounded  border-2 bg-gray-900 py-4 text-xs text-white"
                            type="button"
                          >
                            Log in
                          </button>

                          <a href="#!">Forgot password?</a>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="focus:border-danger-600  inline-block rounded border-2 bg-gray-900 px-6 pb-[6px] pt-2 text-xs text-white"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
