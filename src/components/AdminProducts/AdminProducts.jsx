import React from "react";
import "./adminProducts.css";
import { Link } from "react-router-dom";

const AdminProducts = ({ product, onDelete }) => {

    const handleDeleteClick = () => {
        onDelete(product._id);
    };

    return (
        <div className="adminProductContainer">
            <div className="adminProduct">
                <img src={product.image} alt={product.name} className="adminProductImg"/>
                <div className="adminProductNameDescription">
                    <p className="adminProductName">{product.name}</p>
                    <p className="adminProductDescription">{product.description}</p>
                </div>
                <div className="adminProductPriceStock">
                    <p className="adminProductPrice">${product.price}</p>
                    <p className="adminProdcutStock">{product.stock}</p>
                </div>
            </div>
            <div className="adminButtons">
                {/* <button className="btnEdit">Edit</button> */}
                <Link className="btnEdit" to={`/admin/editProduct/${product._id}`}>Edit</Link>
                <button className="btnDelete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
};

export default AdminProducts;