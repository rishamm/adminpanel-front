import './App.css'
import Sidebar from './sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Programs from './pages/Programs'
import { Box } from '@mui/material'
import Navbar from './shared/Navbar'
import Career from './pages/Career'
import News from './pages/News'
import ContactUs from './pages/ContactUs'
import Testimonial from './pages/Testimonial'
import Package from './pages/Package'
import SocialMedia from './pages/SocialMedia'
import Terms_ConditionPage from './pages/Terms_ConditionPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Courses from './pages/Courses'
import IdeaStage from './programs/IdeaStage/IdeaStage'
import Hackathon from './programs/Hackthon/Hackathon'
import Education from './programs/Education/Education'
import Communities from './pages/Communities'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        {/* Route without Sidebar and Navbar */}
        <Route path='/login' exact element={<Login />} />

        {/* Route with Sidebar and Navbar */}
        <Route
          path='/*'
          element={
            <div className=''>
              <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <div className='w-full '>
                  <Navbar />
                  <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/programs' exact element={<Programs />} />
                    <Route path='/career' exact element={<Career />} />
                    <Route path='/users' exact element={<News />} />
                    <Route path='/contact' exact element={<ContactUs />} />
                    <Route path='/testimonials' exact element={<Testimonial />} />
                    <Route path='/pay-request' exact element={<Communities />} />
                    <Route path='/package' exact element={<Package />} />
                    <Route path='/Course' exact element={<Courses />} />
                    <Route path='/socialmedia' exact element={<SocialMedia />} />
                    <Route path='/terms&Conditions' exact element={<Terms_ConditionPage />} />
                    <Route path='/privacyPolicy' exact element={<PrivacyPolicy />} />
                    <Route path='/idea' exact element={<IdeaStage />} />
                    <Route path='/hack' exact element={<Hackathon />} />
                    <Route path='/education' exact element={<Education />} />
                  </Routes>
                </div>
              </Box>
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App
