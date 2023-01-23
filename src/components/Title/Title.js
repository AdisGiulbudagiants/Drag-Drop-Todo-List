import styles from "./Title.module.css"

const Title = () => {
  return (
    <>
      <h1 className={styles.title}>
        Drag & Drop <span>Todo </span>List
      </h1>
      <p className={styles.paragraph}>This is my project for Resume</p>
    </>
  )
}

export default Title
