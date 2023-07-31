import "./spinner.scss";
import { FC } from "react";


export const Spinner: FC = () => (
  <div className="pos-center">
    <div data-test-id="loader" className="loader"></div>
  </div>
);
