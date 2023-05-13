import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';
import Head from 'next/head';


const NewMeetup = () => {
    const router = useRouter();

    const addNewMeetupHandler = async (meetupData) => {
        // relative path, api runs on the same server
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        await router.push('/');
    }

    return <Fragment>
        <Head>
            <title>Add New Meetup</title>
            <meta name='description' content='Add your own meetup.' />
        </Head>
        <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </Fragment>
    
}

export default NewMeetup;