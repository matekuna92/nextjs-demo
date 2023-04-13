import MeetupItem from "./MeetupItem";
import styles from './MeetupList.module.css';
import Layout from "../layout/Layout";

const MeetupList = (props) => {
    return (
            <ul className={styles.meetupList}>
                {props.meetups.map(item => (
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