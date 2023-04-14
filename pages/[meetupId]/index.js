
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    return <MeetupDetail
        image='https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        title='First Meetup'
        address='Some Street 15, Some City'
        desc='Meetup 1 Description'
    />
}

// context also exists in getStaticProps, but request and response cant be accessed like in getServerSideProps
export const getStaticProps = async (context) => {
    const params = context.params;

    return {
        props: {
            meetupData: {
                id: params.meetupId,        // [meetupId] can be accessed from the URL
                image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                title: 'First Meetup',
                address: 'Some Street 15, Some City',
                desc: 'Meetup 1 Description'
            }
        }
    }
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    meetupId: '1'
                },
            },
            {
                params: {
                    meetupId: '2'
                },
            }
        ],
        // if false: it means that paths array contains ALL supported parameter values for meetupID-s,
        // if user enters a path which isnt defined in the array, user will get a 404 error
        // if true: it contains only some of them, needs fallback. NextJS tries to generate a page for the incoming request
        fallback: false
    }
}

export default MeetupDetails;