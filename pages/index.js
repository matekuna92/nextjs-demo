/* if we import something in a page component file, but using it in getStaticProps - so it will run only on server -
nextJS knows that it belongs to server-side code, so the imported package
 wont appear in the client-side bundle with the other files - bundle size wont be bigger, because the imported package -
 for exmaple MongoClient here - will never reach the client - will be included in a seperate bundle */
 import { MongoClient } from 'mongodb';
 import Head from 'next/head';

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from 'react';

const HomePage = (props) => {
    // old version: set Meetups inside useEffect with the help of useState
    // new version: getServerSideProps will handle the meetups from props, so useEffect and state are no longer needed
   // const [loadedMeetups, setLoadedMeetups] = useState([]);

    // on first component render loadedMeetups will be empty array
    // then useEffect runs, component rerenders again with the actual data
    // nextJs wont wait this 2nd render, in page source the <ul> is also empty, 
    // it always takes the resulst of first render, which is an empty list
    // it works, but it is a SEO problem, because page source doesnt containt the list items
//    useEffect(() => {
//        setLoadedMeetups(TEST_MEETUPLIST);
//    }, []);

    return (
        <Fragment>
            <Head>
                <title>React Meetups NextJS Demo</title>
                <meta name='description' content='Browse the latest developer meetups.' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

// only works inside pages/ components files!
// nextJS looks for this function and runs it before component function
// nextJS waits for this function to load, so we will already have the data, when the component is loaded after getStaticProps
// meetups list will be loaded before component, then will be sent as props to component, so it's available before component render
 export const getStaticProps = async () => {
    try {
        const client = await MongoClient.connect('mongodb+srv://jsnext:js123123@nextjsdemo.olsk22u.mongodb.net/test');
        const db = client.db();
        
        const meetupsCollection = db.collection('meetups');
    
        // finds all documents in the collection as default
        const allMeetups = await meetupsCollection.find().toArray();
        console.log(allMeetups);
    
        console.log('allMeetups', allMeetups);
    
        await client.close();
    
        // getServerSideProps is better, if we need the access to req and res, or if data is changing eg. every seconds
        // revalidate has no sense in getServerSideProps
        // getStaticProps is better when data is not changing frequently, because it can be cached, 
        // so page wont regenerate on every request all the time
        return {
            props: {
                // meetups object cant be passed as value for meetups key, need to return an object
                // Error serializing `.meetups[0]._id`, ("[object Object]") cannot be serialized as JSON. error
                // reason: mongoDB stores _id for every item not as String, but in an "ObjectId('643abc0c8841f0fc031b0329') format
               /// meetups: allMeetups
                meetups: allMeetups.map(meetup => ({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    desc: meetup.desc,
                    id: meetup._id.toString()
                }))
            },
            revalidate: 1
        };
    }
    catch(err) {
        return 'Data fetching from MongoDB failed';
    }

  /*  return {
        props: {
            meetups: TEST_MEETUPLIST
        },
        // with revalidate this page wont just be generated in the build process(it's the default),
        //but also in every 10seconds, if there are request for this page
        // without it data could be outdated, because getStaticProps loads once on build,
        //and this function wont know about new meetups without revalidate
        revalidate: 10      // number of seconds nextJS waits until it regenerates this page for an incoming request
    }
} */

// will run always on the server after deployment, not during build process as getStaticProps
/* export const getServerSideProps = async (context) => {
    // we could access reqest and response objects from context, if it's needed
    const req = context.req;
    const res = context.res; */
}

export default HomePage;