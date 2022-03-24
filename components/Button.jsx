import styles from './Button.module.css'

export default function Button({ children, click, secondary }) {
  return (
    <button onClick={click} className={secondary ? styles.secondary : styles.primary}>
      {children || 'Button'}
    </button>
  )
}