import styles from './Key.module.css'

export default function Key({ children }) {
    return (
        <div  className={styles.container}>{children}</div>);
}