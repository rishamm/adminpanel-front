import Card from '../../components/card'
import img1 from "../../assets/mentors1.png"
import img2 from "../../assets/mentors2.png"
import img3 from "../../assets/mentors3.png"
import EditMentors from '../addingSection/EditMentors'

const Mentors = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Mentors
          </div>
          <div className='flex gap-3'>
            <EditMentors />
          </div>
        </header>
        <div className='flex gap-3'>
          <div className='flex flex-col gap-5 w-[48%]'>
            <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
              <h1>Mentors</h1>
            </div>
            <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Join our Mentorship Community—a vibrant network of professionals, industry leaders, and experienced mentors dedicated to shaping the next generation of innovators and entrepreneurs.</p>

              <p>We unite mentors with diverse backgrounds and expertise globally, fostering an environment for meaningful connections, collaboration, and impactful mentorship experiences.
              </p>
            </div>

            <div className='p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
              <p className="text-navy-700">
                Button Text
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%]  gap-3">
            <div className='flex gap-2 h-60'>
              <img
                src={img1}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
              <img
                src={img2}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
            <div className='h-48'>
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

export default Mentors