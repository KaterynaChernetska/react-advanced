import { FC, useEffect, useCallback } from "react";
import "./modal.scss";
import { createPortal } from "react-dom";
import { BookTripForm } from "../BookTripForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Spinner } from "../Spinner";
import { setModalClose } from "../../redux/modal/operations";

const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

export const Modal: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.tripByIdReducer);

  const onCloseCallback = useCallback(() => {
    dispatch(setModalClose());
  }, [dispatch]);

  useEffect(() => {
    const onModalClose = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onCloseCallback();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onModalClose);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onModalClose);
    };
  }, [onCloseCallback]);

  return createPortal(
    <div>
      <div className="modal">
        <div data-test-id="book-trip-popup" className="book-trip-popup">
          <button
            onClick={onCloseCallback}
            data-test-id="book-trip-popup-close"
            className="book-trip-popup__close"
          >
            ×
          </button>
          {loading ? <Spinner /> : <BookTripForm />}
        </div>
      </div>
    </div>,
    modalRoot
  );
};
