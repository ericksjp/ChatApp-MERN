export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-gray-400 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <label className="label p-2 pb-0">
            <span className="text-base label-text text-blue-300">Fullname</span>
          </label>
          <input
            type="text"
            placeholder="Enter Fullname"
            className="w-full input input-bordered h-10"
          />

          <label className="label p-2 pb-0 ">
            <span className="text-base label-text text-blue-300">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full input input-bordered h-10"
          />

          <label className="label p-2 pb-0">
            <span className="text-base label-text text-blue-300">Password</span>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
          />

          <label className="label p-2 pb-0">
            <span className="text-base label-text text-blue-300">
              Confirm Password
            </span>
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full input input-bordered h-10"
          />

          <div className="flex mt-2">
            <label className="flex items-center gap-x-2 mr-2 text-blue-300">
              Male
              <input
                type="checkbox"
                className="checkbox checkbox-sm border-gray-400"
              />
            </label>
            <label className="flex items-center gap-x-2 text-blue-300">
              Female
              <input
                type="checkbox"
                className="checkbox checkbox-sm border-gray-400"
              />
            </label>
          </div>

          <a
            href="#"
            className="text-sm text-blue-200 w-full text-center hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already Have an account?
          </a>
          <button className="btn btn-block btn-sm mt-2 hover:bg-blue-700">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
