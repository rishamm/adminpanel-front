import Card from '../../components/card'
import img1 from "../../assets/club1.png"
import img2 from "../../assets/club2.png"
import img3 from "../../assets/club3.png"
import img4 from "../../assets/club4.png"
import EditClubs from '../addingSection/EditClubs'

const Clubs = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Clubs
          </div>
          <div className='flex gap-3'>
            <EditClubs />
          </div>
        </header>
        <div className='flex gap-2'>
          <div className='w-[50%] flex flex-col gap-4 h-full'>
            <div className='flex  w-[50%] h-[80%] gap-4'>
              <img src={img1} alt='Image' className=' w-[80%]  h-[240px] rounded-[23px]' />
              <img src={img2} alt='Image' className='w-full h-[240px] rounded-[23px]' />
            </div>
            <div className='flex  w-[50%] h-[80%] gap-4'>
              <img src={img3} alt='Image' className='w-full h-[240px] rounded-[23px]' />
              <img src={img4} alt='Image' className=' w-[80%]  h-[240px] rounded-[23px]' />
            </div>
          </div>
          <div className='flex flex-col gap-5 w-[50%]'>
            <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
              <h1>For venture funds</h1>
            </div>
            <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Engage with the One Global Hub fund in investment ventures, bolstering startup growth via strategic commercial collaborations.</p>

              <p>Dive deeper into our ecosystem with opportunities for interaction with startups, fostering co-innovation and co-investment. Additionally, discover enhanced exit strategies from our diverse portfolio companies
              </p>
            </div>

            <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Button Text
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Clubs