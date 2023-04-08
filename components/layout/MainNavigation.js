import Link from "next/link";

import styles from './MainNavigation.module.css';


const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.mainLogo}> React Meetups </div>
            <ul>
                <li><Link href='/'> All Meetups </Link></li>
                <li><Link href='/new-meetup'> Add New Meetup </Link></li>
            </ul>
        </header>
    )
}

export default MainNavigation;