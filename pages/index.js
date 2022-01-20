// our-domain.com/
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
]

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

// This only works on files under the pages directory and not on the components directory. This
// reserved function name executes during the pre-rendering process when NextJs finds this
// function. It will first call getStaticProps() before it calls the component function. Its job
// is to prepare props for this page that contains data the page needs and can be asynchronous.
// NextJs will wait for this Promise to resolve, and returns the props for this component function.
// You're able to load data before the component function executes so that this component can be
// rendered with the required data. Code written here will never end up on the client side and it
// will never execute on the client side because this code is executed during the build process
export function getStaticProps() {
  // Must always return an object
  // Any data passed to the props key is received by the props parameter of the component function
  return {
    props: { meetups: DUMMY_MEETUPS },
  }
}

export default HomePage
