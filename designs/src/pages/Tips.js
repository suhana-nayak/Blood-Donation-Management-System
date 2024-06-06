import React from "react";
import './Tips.css';

function Serive() {
    return (
        <div className="service component__space" id="Services">
            <div className="heading">
                <p className="heading p__color">
              Here are some guidelines to help you feel at ease when donating blood.
                </p>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="service__box pointer">

                            <div className="service__meta">
                                <h1 className="service__text">The Day Before</h1>
                                <p className="p service_text p_color">
                                    1. Hydrate well.
                                </p>
                                <p className="p service_text p_color">
                                    2. Eat a balanced, iron-rich meal.
                                </p>
                                <p className="p service_text p_color">
                                    3. Get a good night's sleep.
                                </p>
                                <p className="p service_text p_color">
                                    4. Avoid alcohol and excessive caffeine.
                                </p>
                                <p className="p service_text p_color">
                                    5. Review your health status.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="service__meta">
                                <h1 className="service__text">The Day Of Donating</h1>
                                <p className="p service_text p_color">
                                    1. Arrive at the donation center on time.
                                </p>
                                <p className="p service_text p_color">
                                    2. Have a light meal with a balance of protein and carbohydrates.
                                </p>
                                <p className="p service_text p_color">
                                    3. If you're nervous, let the staff know; they can help you relax.
                                </p>
                                <p className="p service_text p_color">
                                    4. Wear Suitable Clothing.
                                </p>
                                <p className="p service_text p_color">
                                    5. Follow any specific guidelines provided by the donation center.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="service__meta">
                                <h1 className="service__text">The Day After Donation</h1>
                                <p className="p service_text p_color">
                                    1.  Sit for a few minutes and enjoy a provided snack and drink.
                                </p>
                                <p className="p service_text p_color">
                                    2. Consume a balanced meal.
                                </p>
                                <p className="p service_text p_color">
                                    3. Don't engage in heavy physical activity immediately before or after donating.
                                </p>
                                <p className="p service_text p_color">
                                    4. Be alert for dizziness, nausea, or fainting and report them to the staff.
                                </p>
                                <p className="p service_text p_color">
                                    5. Adhere to any specific instructions provided by the donation center.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Serive;