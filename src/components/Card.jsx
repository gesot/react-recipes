import classes from "./Card.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Card({ cardTitle, cardImg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        {cardTitle && <h2>{cardTitle.split(" ").slice(0, 3).join(" ")}</h2>}
        <div className={classes.card} onClick={openModal}>
          <img src={cardImg} alt="An image"></img>
        </div>
      </div>

      {isModalOpen && <Modal handler={closeModal} />}
    </>
  );
}
