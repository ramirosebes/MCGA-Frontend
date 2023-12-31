import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import axios from "axios";
import styles from "./itemDetailContainer.module.css"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error(`Error fetching product with ID ${id}:`, error);
            }
        };
        fetchProductById();
    }, [id])

    return (
        <div className={styles.container}>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer