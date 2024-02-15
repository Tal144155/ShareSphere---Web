import "./Feature.css";
import "../Modals.css";

const Feature = () => {
  //this is the feature modal, showing all the features that will be added next
  return (
    <div
      className="modal fade"
      id="featureModal"
      tabIndex="-1"
      aria-labelledby="featureModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="featureModalLabel">
              This feature will be added Soon!
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            In the meantime, enjoy our amazing feed!
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="button-closed"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
