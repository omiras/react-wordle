import styles from './Key.module.css'

export default function Key({ children, action, onKeySelected }) {
    return (
        <div onClick={() => onKeySelected(action)} className={styles.container}>{children}</div>);
}