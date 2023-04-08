import MeetupItem from "./MeetupItem";
import styles from './MeetupList.module.css';

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

const MeetupList = () => {
    return (
            <ul className={styles.meetupList}>
                {TEST_MEETUPLIST.map(item => (
                    <MeetupItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        address={item.address}
                        desc={item.desc}
                    />
                ))}
            </ul>
    );
}

export default MeetupList;