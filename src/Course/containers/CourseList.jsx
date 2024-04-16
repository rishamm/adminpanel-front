import React from 'react'
import CourseHero from '../components/CourseHero'
import CourseCard from '../components/CourseCard'
import SliderSection from '../components/SliderSection'
import Goals from '../components/Goals'
import ComminSoon from '../components/CommingSoon'
import CourseTestimonals from '../components/CourseTestimonals'

const CourseList = () => {
  return (
    <div>
        <CourseHero/>
        <CourseCard/>
        <SliderSection/>
        <Goals/>
        <ComminSoon/>
        <CourseTestimonals/>
      
    </div>
  )
}

export default CourseList
