import Image from 'next/image'
import { formatDate } from '../../utils/formatDate'

interface blogInterface {
  title: string,
  date: string,
  briefExcerpt: string,
  image: string,
}


const BlogCard = ({ title, date, briefExcerpt, image }: blogInterface) => {
  return (
    <div className='max-w-sm bg-slate-200'>
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
      />
      <div className="p-5">
        <p className='text-sm font-medium'>{formatDate(date)} . 5 min Read</p>
        <h5 className='font-bold my-2 text-xl'>{title}</h5>
        <p>{briefExcerpt}..</p>
      </div>
    </div>
  )
}

export default BlogCard