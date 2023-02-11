import styles from "@/styles/SubBtn.module.css";
export default function SubBtn({ onClick, buttonName }) {
  return (
    <div>
      <button onClick={onClick} className={styles.subject_button}>
        {buttonName}
      </button>
    </div>
  );
}
