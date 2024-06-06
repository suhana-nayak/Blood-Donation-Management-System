import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <DestinationData
                heading="Blood type compatibility"
                text={
                    <div>
                        <p>
                            Blood type compatibility is crucial for safe medical procedures like blood transfusions and organ transplants. It's mainly determined by two blood group systems: ABO and Rh.
                        </p>

                        <h3>ABO Blood Group System:</h3>

                        <p>
                            <u>Blood Type Compatibility in the ABO System:</u>
                            <ul>
                                <li>Type A can receive blood from A and O donors.</li>
                                <li>Type B can receive blood from B and O donors.</li>
                                <li>Type AB can receive blood from A, B, AB, and O donors (universal recipient).</li>
                                <li>Type O can only receive blood from O donors (universal donor).</li>
                            </ul>
                        </p>
                        <h3>Rh Blood Group System:</h3>

                        <p>
                            <u>Blood Type Compatibility in the Rh System:</u>

                            <ul>
                                <li>Rh-positive individuals can receive Rh-positive or Rh-negative blood.</li>
                                <li>Rh-negative individuals should receive Rh-negative blood but can occasionally receive Rh-positive blood in emergency situations.</li>
                            </ul></p>

                    </div>
                }
                img1="https://upload.wikimedia.org/wikipedia/commons/2/2c/Compatibility_testing_concerning_RBCs_2014-02-01_00-42.jpg"
            />
        </div>
    )
}
export default Destination;