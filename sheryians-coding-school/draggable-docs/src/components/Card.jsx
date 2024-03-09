import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'

const Card = ({ text, size, className }) => {
  return (
    <div
      className={`w-60 text-white
      h-72 rounded-3xl  py-10 px-5 relative overflow-hidden border border-white/10 shadow-xl ${className}`}
    >
      <div className='text-orange-500'>
        <FaRegFileAlt />
      </div>
      <p className='text-sm mt-5 leading-tight font-semibold text-green-600'>
        {text}
      </p>
      <div className='absolute bottom-0   w-full left-0 h-12 py-3 text-white flex justify-between items-center mb-5 px-5'>
        <h5 className='text-orange-500'>{size}</h5>
        <span className='size-6 bg-red-500 flex justify-center items-center p-1 rounded-full'>
          <LuDownload size='0.7em' />
        </span>
      </div>
    </div>
  )
}

export default Card
