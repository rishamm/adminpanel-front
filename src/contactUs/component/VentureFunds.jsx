import Card from '../../components/card'
import img1 from "../../assets/venture1.png"
import img2 from "../../assets/venture2.png"
import img3 from "../../assets/venture3.png"
import EditVentureFunds from '../addingSection/EditVentureFunds'

const VentureFunds = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Venture Funds
          </div>
          <div className='flex gap-3'>
            <EditVentureFunds />
          </div>
        </header>
        <div className='flex gap-2'>
          <div className='w-[50%] flex gap-4 h-full  p-2'>
            <div className='w-[40%] h-80'>
              <img src={img1} alt='Image' className='w-[100%] h-[470px] rounded-[23px]' />
            </div>
            <div className='flex flex-col w-[60%] h-[80%] gap-4'>
              <img src={img2} alt='Image' className=' w-[80%]  h-[240px] rounded-[23px]' />
              <img src={img3} alt='Image' className='w-full h-[320px] rounded-[23px]' />
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

export default VentureFunds