import { RotatingLines } from "react-loader-spinner"
import styles from "./Loader.module.css"
export default function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines width="100px" height="100px" strockWidth="3" strokeColor="#fe5d42"></RotatingLines>
    </div>
  )
}
