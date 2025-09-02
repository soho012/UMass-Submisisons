import styles from './PlanetCard.module.css'

export default function PlanetCard({ planet, children }) {
return (
<article className={`card ${styles.card}`}>
<div className={styles.header}>
<h3 className={styles.title}>{planet.name}</h3>
{planet.pictureUrl && <img src={planet.pictureUrl} alt={planet.name} />}
</div>
<p className={styles.meta}><strong>Population:</strong> {planet.currentPopulation.toLocaleString()}</p>
{children}
</article>
)
}