

import styles from './NewMeetupForm.module.css';
import MainNavigation from "../layout/MainNavigation";

const NewMeetupForm = () => {
    const submitHandler = () => {
        console.log('submitted!');
    }
    
    return (
        <>
            <MainNavigation />
            <form className={styles.form} onSubmit={submitHandler}>
                
                <div className={styles.formControl}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='text' id='image' required />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' required />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor='desc'>Description</label>
                    <input type='textarea' id='desc' required />
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div> 
            </form>
        </>
    );
}

export default NewMeetupForm;