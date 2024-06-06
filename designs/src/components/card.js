import "./CardStyles.css";
import CardData from "./CardData";
import Blood1 from "../assets/blood1.jpg";
import Blood2 from "../assets/blood2.jpeg";
import Blood3 from "../assets/Blood3.jpg";

function Card() {
    return (
        <div className="card">
            <h1>Tips</h1>
            <p>Some things u need to remember</p>
            <div className="cardcard">
                <CardData
                    image={Blood1}
                    heading="The Day Before"
                    text={<div>
                        <p>1. Hydrate well.</p>
                        <p>2. Eat a balanced, iron-rich meal.</p>
                        <p>3. Get a good night's sleep.</p>
                        <p>4. Avoid alcohol and excessive caffeine.</p>
                        <p>5. Review your health status.</p>
                    </div>}
                />
                <CardData
                    image={Blood2}
                    heading="The Day Of Donating"
                    text={<div>
                        <p>1. Arrive at the donation center on time.</p>
                        <p>2. Have a light meal with a balance of protein and carbohydrates.</p>
                        <p>3. If you're nervous, let the staff know; they can help you relax.</p>
                        <p>4. Wear Suitable Clothing.</p>
                        <p>5. Follow any specific guidelines provided by the donation center.</p>
                    </div>}

                />
                <CardData
                    image={Blood3}
                    heading="The Day After Donation"
                    text={<div>
                        <p>1. Sit for a few minutes and enjoy a provided snack and drink.</p>
                        <p>2. Consume a balanced meal.</p>
                        <p>3. Don't engage in heavy physical activity immediately before or after donating.</p>
                        <p>4. Be alert for dizziness, nausea, or fainting and report them to the staff.</p>
                        <p>5. Adhere to any specific instructions provided by the donation center.</p>
                    </div>}
                />
            </div>
        </div>
    );
}

export default Card;