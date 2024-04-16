import Card from '../../components/card'
import img1 from "../../assets/corporate1.png"
import img2 from "../../assets/corporate2.png"
import img3 from "../../assets/corporate3.png"
import EditCorpInnovate from '../addingSection/EditCorpInnovate'

const CorporateInnovation = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Corporate Innovation
          </div>
          <div className='flex gap-3'>
            <EditCorpInnovate/>
          </div>
        </header>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-5 w-[50%]'>
            <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
              <h1>HeaOne Global Hub stands as a leading force in corporate innovationding:1</h1>
            </div>
            <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Our commitment to our partners extends beyond mere collaboration; it's about fostering an exchange of practices and experiences that propel both innovation and venture ecosystems forward.
                Together with our partners, we're reshaping the innovation landscape, with a distinct focus on enhancing the global technology community.
              </p>
            </div>

            <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Button Text
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%]  gap-3">
            <div className='h-48'>
              <img
                src={img1}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
            <div className='flex gap-5 h-60'>
              <img
                src={img2}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
              <img
                src={img3}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>

          </div>
        </div>
      </Card>
    </div>
  )
}

export default CorporateInnovation