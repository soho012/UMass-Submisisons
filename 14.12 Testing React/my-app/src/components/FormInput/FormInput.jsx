import styles from './FormInput.module.css'

export default function FormInput({ label, error, ...props }) {
const id = props.id || props.name
return (
<div className={styles.group}>
<label htmlFor={id} className="label">{label}</label>
<input id={id} className="input" {...props} />
{error && <div className="error">{error}</div>}
</div>
)
}