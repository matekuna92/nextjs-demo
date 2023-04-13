import { useEffect, useState } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import MeetupList from "../components/meetups/MeetupList";

const TEST_MEETUPLIST = [
    {
        id: '1',
        title: 'Title 1',
        image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address: '1111 Test Street 1',
        desc: 'First meetup'
    },
    {
        id: '2',
        title: 'Title 2',
        image: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        address: '2222 Test Street 2',
        desc: 'Second meetup'
    },
    {
        id: '3',
        title: 'Title 3',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        address: '3333 Test Street 3',
        desc: 'Third meetup'
    }
];


const HomePage = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // on first component render loadedMeetups will be empty array
    // then useEffect runs, component rerenders again with the actual data
    // nextJs wont wait this 2nd render, in page source the <ul> is also empty
    useEffect(() => {
        setLoadedMeetups(TEST_MEETUPLIST);
    }, []);

    return (
        <>
            <MeetupList meetups={loadedMeetups} />
        </>
    )
}

export default HomePage;