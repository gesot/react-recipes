/* Modal.js */
import classes from "./Modal.module.css";

export default function Modal({ handler }) {
  return (
    <div className={classes.modalOverlay} onClick={handler}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Title of the card</h2>
        <img src="" alt="An image"></img>
        <p>blabla</p>
        <p>blabla</p>
      </div>
    </div>
  );
}
