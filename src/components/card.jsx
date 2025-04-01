import rigobaby from "../assets/img/rigo-baby.jpg"
export const Card = ({ id, name, address, phone, email,onDelete,onEdit }) => {

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4 p-3">
                    <img src={rigobaby} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">


                            <h1 className="card-title">{name}</h1>
                            <div>
                                <button type="button" className="btn btn-outline-info me-2" onClick={()=>onEdit()} data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button type="button" className="btn btn-outline-danger me-2" 
                                onClick={()=>onDelete()} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <p className="card-text">📍Address: {address}</p>
                        <p className="card-text">☎️ Phone: {phone}</p>
                        <p className="card-text">📧 E-Mail: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}