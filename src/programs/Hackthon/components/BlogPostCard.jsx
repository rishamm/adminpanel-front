import { MdDelete } from 'react-icons/md'
import Card from '../../../components/card'
import { FaEdit } from 'react-icons/fa'

const BlogPostCard = () => {
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto`}>
                <div className='flex gap-5 p-3 border rounded-xl'>
                    <div className='flex flex-col gap-5 '>
                        <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <p className="text-navy-700">
                                The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                            </p>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
                            <p></p>
                        </div>

                        <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <p className="text-navy-700">
                                Button Text
                            </p>
                        </div>
                        <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <p className="text-navy-700">
                                Button Link
                            </p>
                        </div>
                        <div className="flex justify-end gap-1 p-2">
                            <button className="text-navy-700" >
                                <FaEdit className="w-5 h-6 text-navy-700" />
                            </button>
                            <button className="text-navy-700">
                                <MdDelete className="w-6 h-6 text-black" />
                            </button>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default BlogPostCard