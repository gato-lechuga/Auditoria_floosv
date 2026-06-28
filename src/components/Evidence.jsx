import { useState } from "react";

function Evidence({ image, title, description }) {

    const [open, setOpen] = useState(false);

    return (

        <>
            <div className="evidence">

                <img
                    src={image}
                    alt={title}
                    onClick={() => setOpen(true)}
                />

                <div className="evidence-caption">

                    <h4>{title}</h4>

                    <p>{description}</p>

                    <small>
                        Clic sobre la imagen para ampliarla.
                    </small>

                </div>

            </div>

            {open && (

                <div
                    className="modal"
                    onClick={() => setOpen(false)}
                >

                    <img
                        src={image}
                        alt={title}
                    />

                </div>

            )}

        </>

    );

}

export default Evidence;