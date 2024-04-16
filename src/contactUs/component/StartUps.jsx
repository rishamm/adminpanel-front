import Card from '../../components/card'
import startup from "../../assets/startup.png"
import EditStartups from '../addingSection/EditStartups'

const StartUps = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Startups
          </div>
          <div className='flex gap-3'>
            <EditStartups />
          </div>
        </header>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-5 w-[50%]'>
            <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
              <h1>Startups</h1>
            </div>
            <div className='flex flex-col gap-3 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                At One Global Hub, we make substantial investments in companies, driving their growth through the unique strengths of our ecosystem. Our selection process prioritizes factors like maturity stage, investment evaluation, and strategic alignment.
              </p>
              <p>With a dedicated focus spanning over 20 industries, including tech, travel, big data, consumer apps, and media, we are poised to lead in a broad spectrum of market sectors.</p>
            </div>

            <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Button Text
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%]  gap-3">
            <div className='h-96'>
              <img
                src={startup}
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

export default StartUps