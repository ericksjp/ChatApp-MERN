import { Link } from "react-router-dom";

export default function Modal() {
  function handleClose() {
    document.getElementById("my_modal_3").close();
  }

  return (
    <dialog id="my_modal_3" className="modal absolute m-auto top-2/4 w-96">
      <div className="modal-box flex flex-col justify-items-center items-center">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-none"
          onClick={handleClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg text-center mt-3">
          Are you sure you wanna logout?
        </h3>
        <div className="modal-action">
          <Link to="/login" className="btn btn-square">
            Yes
          </Link>
          <button className="btn btn-square" onClick={handleClose}>
            No
          </button>
        </div>
      </div>
      )
    </dialog>
  );
}
