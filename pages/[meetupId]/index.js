
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from 'react';
import Head from 'next/head';

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.desc} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                desc={props.meetupData.desc}
            />
        </Fragment>
    );
}

// context also exists in getStaticProps, but request and response cant be accessed like in getServerSideProps
export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://jsnext:js123123@nextjsdemo.olsk22u.mongodb.net/test');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');
    // return all documents, only extracting the id field values from every item
    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
    console.log("selectedMeetup: ", selectedMeetup);

    await client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                desc: selectedMeetup.desc
            }
        }
    }
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://jsnext:js123123@nextjsdemo.olsk22u.mongodb.net/test');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');
    // return all documents, only extracting the id field values from every item
    const allMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    await client.close();

    return {
        paths: 
            allMeetups.map(meetup => ({
                params: {
                    meetupId: meetup._id.toString()
                }
            })),
        // if false: it means that paths array contains ALL supported parameter values for meetupID-s,
        // if user enters a path which isnt defined in the array, user will get a 404 error
        // if true: it contains only some of them, needs fallback. NextJS tries to generate a page for the incoming request
        fallback: true
    }
}

export default MeetupDetails;