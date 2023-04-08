import styles from './MeetupItem.module.css';
import MainNavigation from "../layout/MainNavigation";

const MeetupItem = (props) => {
    return (
        <li className={styles.item}>
            <div className={styles.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
            </div>
            <div className={styles.actions}>
              <button>Show Details</button>
            </div>
        </li>
    );
}

export default MeetupItem;