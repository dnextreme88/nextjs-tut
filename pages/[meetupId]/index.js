// our-domain.com/{meetupId}
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a First Meetup'
    />
  )
}

export default MeetupDetails
