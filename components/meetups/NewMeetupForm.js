

import { useRef } from 'react';

import styles from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import Layout from "../layout/Layout";

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const formData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            desc: enteredDesc
        };

        props.onAddNewMeetup(formData);
    }
    
    return (
        <>
            <Card>
                <form className={styles.form} onSubmit={submitHandler}>

                    <div className={styles.formControl}>
                        <label htmlFor='title'>Meetup Title</label>
                        <input type='text' id='title' ref={titleInputRef} required />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor='image'>Meetup Image</label>
                        <input type='text' id='image' ref={imageInputRef} required />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor='address'>Address</label>
                        <input type='text' id='address' ref={addressInputRef} required />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor='desc'>Description</label>
                        <input type='textarea' id='desc' ref={descInputRef} required />
                    </div>
                    <div className={styles.actions}>
                        <button>Add Meetup</button>
                    </div>
                </form>
            </Card>
        </>
    );
}

export default NewMeetupForm;