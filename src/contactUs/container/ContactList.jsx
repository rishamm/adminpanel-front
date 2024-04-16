import Clubs from '../component/Clubs'
import CorporateInnovation from '../component/CorporateInnovation'
import Hero from '../component/Hero'
import Mentors from '../component/Mentors'
import QueriesTable from '../component/QueriesTable'
import StartUps from '../component/StartUps'
import VentureFunds from '../component/VentureFunds'

const ContactList = () => {
  
  return (
    <div>
      <Hero />
      <CorporateInnovation />
      <VentureFunds />
      <StartUps />
      <Clubs />
      <Mentors />
      <QueriesTable />
    </div>
  )
}

export default ContactList