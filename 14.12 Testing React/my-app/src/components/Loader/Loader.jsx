import styles from './Loader.module.css'

export default function Loader() {
return (
<div className={styles.loaderWrap} role="status" aria-live="polite">
<div className={styles.spinner} />
<span>Loading…</span>
</div>
)
}