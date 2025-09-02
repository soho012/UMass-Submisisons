import { Link } from 'react-router-dom'
import styles from './SpacecraftCard.module.css'

export default function SpacecraftCard({ sc, onDestroy }) {
return (
<article className={`card ${styles.card}`}>
<div className={styles.media}>
<img src={sc.pictureUrl || 'https://picsum.photos/seed/ship'+sc.id+'/400/240'} alt={sc.name} />
</div>
<div className={styles.body}>
<h3 className={styles.title}>{sc.name}</h3>
<p className={styles.meta}><strong>Capacity:</strong> {sc.capacity}</p>
<p className={styles.meta}><strong>Location:</strong> Planet #{sc.currentLocation}</p>
<div className={styles.actions}>
<Link to={`/spacecrafts/${sc.id}`} className="btn">Details</Link>
<button className="btn btn--ghost" onClick={() => onDestroy(sc.id)}>Decommission</button>
</div>
</div>
</article>
)
}