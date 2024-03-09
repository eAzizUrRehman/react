import { motion } from 'framer-motion'
import Card from './Card'
import documents from '../constants'

const Foreground = () => {
  return (
    <div className='w-full h-full fixed top-0 z-10 p-5'>
      <div className='flex justify-center items-center flex-wrap gap-5'>
        {documents.map((doc) => (
          <motion.div
            key={doc.id}
            className='  rounded-3xl'
            drag
          >
            <Card
              text={doc.text}
              size={doc.size}
              className={doc.bgColor}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Foreground
