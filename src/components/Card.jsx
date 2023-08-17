import classes from "./Card.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={classes.card} onClick={openModal}>
        <h2>Title of the card</h2>
        <img src="" alt="An image"></img>
      </div>

      {isModalOpen && <Modal handler={closeModal} />}
    </>
  );
}
