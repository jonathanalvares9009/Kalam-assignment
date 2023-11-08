import Image from "next/image";

type ShowDemoModalProps = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowDemoModal = ({ setClose }: ShowDemoModalProps) => {
  return (
    <section
      className="fixed inset-0 flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-30 z-[1]"
      onClick={() => setClose(false)}
    >
      <Image
        src="/work.webp"
        width={300}
        height={300}
        alt="Shot to share"
        className="work rounded-xl h-2/3 w-full lg:h-full sm:w-2/3"
        unoptimized={true}
      />
      <button className="absolute top-8 right-8 cursor-pointer group rounded-full p-2 bg-black/90 hover:bg-white/90">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          svg-inline=""
          role="presentation"
          focusable="false"
          tabIndex={-1}
          className="text-white group-hover:text-black"
        >
          <path
            d="M17 7L7 17M7 7l10 10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </section>
  );
};

export default ShowDemoModal;
