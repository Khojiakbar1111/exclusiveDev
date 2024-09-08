import "./fetchLoading.css";
import { SyncLoader } from "react-spinners";

function FetchLoading() {
  return (
    <div className="loader-container">
      <SyncLoader />
    </div>
  );
}

export default FetchLoading;
