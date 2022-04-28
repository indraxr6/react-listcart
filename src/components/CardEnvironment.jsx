import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CardEnvironment extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2" >
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        {/* <div className="col-5">
                            <img src={this.props.cover} alt="img" className="img"
                            height="200" />
                        </div> */}
 
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                { this.props.nama }
                            </h5>
                            <h6 className="text-dark">
                                Tanggal: { this.props.tanggal}
                            </h6>
 
                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1"
                            onClick={this.props.onEdit} data-toggle="modal" data-target="#modal">
                                Edit
                            </button>
 
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                            onClick={this.props.onDrop}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardEnvironment;