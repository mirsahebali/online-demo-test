import styles from "@/styles/Subjects.module.css"

export default function Subjects() {
  return (
    <div>
      <button className={styles.subject_button}>All Sections</button>
      <button className={styles.subject_button}>Physics</button>
      <button className={styles.subject_button}>Chemistry</button>
      <button className={styles.subject_button}>Maths</button>
    </div>
  );
}
