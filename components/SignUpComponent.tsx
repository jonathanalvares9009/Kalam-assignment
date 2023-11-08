import Image from "next/image";

type SignUpComponentProps = {
  setCloseSignUp: (desiredState: boolean) => void;
};

const SignUpComponent = ({ setCloseSignUp }: SignUpComponentProps) => {
  return (
    <section
      className="fixed inset-0 flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-30 z-[1]"
      onClick={() => setCloseSignUp(false)}
    >
      <div
        className="flex flex-col fixed bg-white rounded-lg p-8 gap-6 text-center w-4/5 lg:w-2/5 sm:text-left z-1"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image
          src="/dribble-logo.svg"
          width={124}
          height={30}
          alt="Dribble Logo"
          className="hidden select-none xl:block"
        />
        <p className="text-xl font-medium selection:bg-yellow-50">
          To like a shot, please create an account.
        </p>
        <button className="flex gap-2 justify-center items-center bg-black rounded-full py-2 ">
          <Image src="/google.svg" width={20} height={20} alt="Google" />
          <span className="font-medium text-white text-lg">
            Sign up with Google
          </span>
        </button>
        <div className="flex gap-4 w-full items-center select-none">
          <span className="border border-gray-50 w-full"></span>
          <p className="font-medium text-lg text-gray-10">or</p>
          <span className="border border-gray-50 w-full"></span>
        </div>
        <button className="flex gap-2 justify-center items-center bg-white border border-gray-300 rounded-full py-2">
          <span className="font-medium text-black text-lg">
            Continue with email
          </span>
        </button>
        <p className="text-center text-sm font-light selection:bg-yellow-50">
          By creating an account you agree with our &nbsp;
          <a href="https://dribbble.com/terms">
            <span className="border-gray-10 border-b-2 py-0.5 cursor-pointer">
              Terms of Service
            </span>
          </a>
          , &nbsp;
          <a href="https://dribbble.com/privacy">
            <span className="border-gray-10 border-b-2 py-0.5 cursor-pointer">
              Privacy Policy
            </span>
          </a>
          , &nbsp; and our default &nbsp;
          <a href="https://dribbble.com/notifications">
            <span className="border-gray-10 border-b-2 py-0.5 cursor-pointer">
              Notification Settings
            </span>
          </a>
          .
        </p>
        <p className="text-center text-sm font-light selection:bg-yellow-50">
          Already have an account?{" "}
          <a href="https://dribbble.com/session/new">
            <span className="border-gray-10 border-b-2 py-0.5 cursor-pointer">
              Log in
            </span>
          </a>
        </p>

        <Image
          src="/close.svg"
          width={20}
          height={20}
          alt="Close"
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => setCloseSignUp(false)}
        />
      </div>
    </section>
  );
};

export default SignUpComponent;
