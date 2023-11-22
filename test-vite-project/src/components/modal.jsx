import { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open Modal
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio iste quisquam cumque esse natus placeat explicabo saepe nesciunt eaque, sapiente provident commodi voluptates aliquid, iusto recusandae nulla ipsum ratione? Cupiditate reiciendis iure quo possimus voluptates enim magnam molestiae, eius accusantium ducimus qui earum sequi voluptatem odit omnis est voluptatum asperiores officia at eos totam corporis a ipsa perferendis! Aut suscipit nisi inventore mollitia non quae molestias nemo ea illum.
            </p>
            <button className="close-modal" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;