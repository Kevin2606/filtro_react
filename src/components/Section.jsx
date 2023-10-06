import { useEffect, useState } from "react";
import { getAll } from "../storage/producto";
import { CardProduct } from "./CardProduct";
import { Carrito } from "./Carrito";
//import { useParams } from 'react-router-dom';

export default function Section() {
    //const { categoria } = useParams();
    const [json, setJson] = useState([]);

    useEffect(() => {
        //if (!categoria) return; Que haga fecth y devuelva la categoria 1
        getAll().then((res) => {
            setJson(res.data);
        });
    }, []);

    return (
        <>
            <section className="flex flex-col items-center">
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex-1 flex justify-center">
                        <h1 className="w-fit text-center border-2 text-2xl p-2 rounded-lg">
                            Seccion 1
                        </h1>
                    </div>
                    <div>
                        <Carrito />
                    </div>
                </div>
                {json.map((item, index) => {
                    return <CardProduct key={index} {...item} />;
                })}
            </section>
        </>
    );
}
