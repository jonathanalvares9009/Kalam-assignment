import { TAGS } from '@/constants';
import Image from 'next/image';

type ShotDetailsModalProps = {
    setClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ShotDetailsModal = ({setClose}: ShotDetailsModalProps) => {
  return (
    <section className='fixed inset-0 flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-30 z-[1]'>
      <div className='flex flex-col fixed bg-white rounded-lg p-8 gap-6 text-center w-4/5 lg:w-2/5 sm:text-left'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-black font-bold text-2xl'>Shot details</h1>
            <p className='text-gray-10 text-sm font-light'>Posted May 20, 2023</p>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-1">
            <p className='text-gray-10 text-sm font-light'>Views</p>
            <p className='text-black font-medium text-xl'>277</p>
            <p className='text-gray-10 text-sm font-light'>Saves</p>
            <p className='text-black font-medium text-xl'>0</p>
            <p className='text-gray-10 text-sm font-light'>Likes</p>
            <p className='text-black font-medium text-xl'>0</p>
            <p className='text-gray-10 text-sm font-light'>Comments</p>
            <p className='text-black font-medium text-xl'>0</p>
        </div>
        <p>Tags</p>
        <div className='flex flex-wrap gap-3'>
            {TAGS.map((tag, index) => (
                <p key={tag + index} className='border border-gray-300 p-2 rounded-lg'>{tag}</p>
            ))}
        </div>
        <Image src="/close_without_bg.svg" width={20} height={20} alt="Close" className='absolute top-8 right-8 cursor-pointer' onClick={() => setClose(false)} />
      </div>
    </section>
  );
};

export default ShotDetailsModal;
