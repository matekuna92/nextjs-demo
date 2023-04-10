import {Fragment} from 'react';

import styles from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
    return <Fragment>
        <img src={props.image}
                    alt={props.title} />
                <h1>{props.title}</h1>
                <address>{props.address}</address>
                <p>{props.desc}</p>
        </Fragment>
}

export default MeetupDetail;