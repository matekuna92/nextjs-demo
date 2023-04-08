import NewMeetupForm from "../../components/meetups/NewMeetupForm";


const NewMeetup = () => {
    const addNewMeetup = meetupData => {
        console.log(meetupData);
    }

    return <NewMeetupForm onAddNewMeetup={addNewMeetup} />
}

export default NewMeetup;