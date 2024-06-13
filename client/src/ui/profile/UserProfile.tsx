import { auth } from "../../lib/firebase";

const UserProfile = ({ currentUser }: any) => {
  return (
    <div className="mx-auto max-w-7xl  sm:px-6 py-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Welcome back, dear{" "}
          <span>
            <span className="underline underline-offset-2 decoration-[1px] text-white font-medium">
              {currentUser?.firstName} {currentUser?.lastName}
            </span>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam aliqua proident excepteur commodo do ea.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <img
            src={
              currentUser?.avatar
                ? currentUser?.avatar
                : "https://i.ibb.co/mJRkRRV/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
            }
            alt="userImage"
            className="w-52 h-auto rounded-lg border border-gray-700 object-cover p-1"
          />
          <button
            onClick={() => auth.signOut()}
            className="rounded-md bg-white w-52 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Log out
          </button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default UserProfile;
