import {Fragment} from 'react';

import styles from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
    return <section className={styles.detail}>
        <img src={props.image} alt={props.title} className={styles.img} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.desc}</p>
    </section>
}

export default MeetupDetail;