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

// Reserved function name similar to getStaticProps. The difference is that this function will not run during the build process but always on the server after deployment. Code written here will always run on the server, never on the client
// export async function getServerSideProps(context) {
//   // Request object and response object
//   const req = context.req
//   const res = context.res

//   // Must always return an object
//   // No need to use the revalidate key as it doesn't make sense since this function runs for every incoming request unlike getStaticProps(), where it runs for a single incoming request
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   }
// }

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
    // Number of seconds NextJs will wait until it re-generates this page for an incoming request. If a number is supplied, this page will not only be generated during the build process, but also for every couple of seconds on the server, if there are requests for this page. This is useful if you need data to be fetched from the API so that data is never older than the number supplied here. Eg. if your data changes every hour, you can set this to 3600. This is also useful when building the app for production, so that you don't re-deploy every often.
    revalidate: 10
  }
}

export default HomePage
