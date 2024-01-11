import * as React from "react";

function LoginPage(props) {
  return (
    <div className="items-stretch bg-white flex flex-col justify-center">
      <div className="items-stretch flex w-full flex-col justify-center max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch self-stretch flex grow flex-col w-full px-6 py-12 max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.55] object-contain object-center w-full overflow-hidden mt-64 mb-48 max-md:max-w-full max-md:my-10"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center self-stretch bg-cyan-200 bg-opacity-10 flex grow flex-col w-full px-16 py-12 max-md:max-w-full max-md:px-5">
                <div className="items-stretch shadow-lg bg-white flex w-[493px] max-w-full flex-col mt-64 mb-48 pb-12 px-8 rounded-[46px] max-md:my-10 max-md:px-5">
                  <div className="items-center bg-white flex flex-col pt-12 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[2.86] object-contain object-center w-[220px] overflow-hidden max-w-full"
                    />
                    <span className="items-stretch self-stretch bg-white flex flex-col mt-12 px-2.5 max-md:max-w-full max-md:mt-10">
                      <div className="text-slate-300 text-center text-4xl font-bold tracking-tight underline whitespace-nowrap">
                        Sing In
                      </div>
                      <div className="text-zinc-600 text-center text-3xl font-light tracking-tight whitespace-nowrap mt-7">
                        Welcome to Linked Jobs{" "}
                      </div>
                    </span>
                  </div>
                  <div className="border border-[color:var(--Gray-5,#BDBDBD)] shadow-sm bg-white flex justify-between gap-0 mt-14 mb-16 px-8 py-2.5 rounded-[81px] border-solid items-start max-md:max-w-full max-md:flex-wrap max-md:my-10 max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <span className="text-zinc-600 text-center text-2xl tracking-normal whitespace-nowrap justify-center items-stretch bg-white self-stretch grow">
                      Sign In with Google
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginPage;