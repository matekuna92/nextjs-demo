import MeetupItem from "../../components/meetups/MeetupItem";
import { Fragment } from 'react';
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return <MeetupDetail
        image='https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        title='First Meetup'
        address='Some Street 15, Some City'
        desc='Meetup 1 Description'
    />
}

export default MeetupDetails;