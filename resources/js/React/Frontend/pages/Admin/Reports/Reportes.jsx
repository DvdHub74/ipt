import React from "react";

const Reportes = () => {
    const cantidadCards = 16;
    const cards = [];
    for (let i = 0; i < cantidadCards; i++) {
        cards.push(
            <div className="col-3 my-5">
                <div key={i} className="card py-5">
                    <div className="card-body">Card {i + 1}</div>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row">{cards}</div>
            </div>
        </>
    );
};

export default Reportes;
