import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import React, { useContext } from "react";
import UserContext from "../pages/UserContext";

function Login() {
  const { userEmail, setUserEmail } = useContext(UserContext);
  const{myUser, setMyUser} = useContext(UserContext);

  const auth = getAuth();
  auth.languageCode = "it";
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setMyUser(user);
        const email = user.email;
        setUserEmail(email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="items-stretch shadow-lg bg-white flex w-[400px] max-w-full flex-col mt-q0 mb-10  px-4 rounded-[46px] max-md:my-10 max-md:px-5">
        <div className="items-center bg-white flex flex-col pt-12 max-md:max-w-full">
          <img
            srcSet="public/images/logo.png"
            className="aspect-[2.86] object-contain object-center w-[220px] overflow-hidden max-w-full"
          />
          <span className="items-stretch self-stretch bg-white flex flex-col mt-12 px-2.5 max-md:max-w-full max-md:mt-10">
            <div className="text-slate-300 text-center text-2xl font-bold tracking-tight underline whitespace-nowrap">
              Sing In
            </div>
            <div className="text-zinc-600 text-center text-2xl font-light tracking-tight whitespace-nowrap mt-7">
              Welcome to Linked Jobs{" "}
            </div>
          </span>
        </div>
        <div
          onClick={handleLogin}
          className="border border-[color:var(--Gray-5,#BDBDBD)] shadow-sm bg-white flex justify-between gap-0 mt-14 mb-16 px-8 py-2.5 rounded-[81px] border-solid items-start max-md:max-w-full max-md:flex-wrap max-md:my-10 max-md:px-5 cursor-pointer"
        >
          <img
            src="public/images/Google - jpeg.png"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <span className="text-zinc-600 text-center text-xl tracking-normal whitespace-nowrap justify-center items-stretch bg-white self-stretch grow">
            Sign In with Google
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
