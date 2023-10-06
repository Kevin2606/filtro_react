import PropTypes from "prop-types";
import { ModalObtener } from "./ModalObtener";
export const CardProduct = ({
    nombre,
    imagen,
    descripcion,
    precio,
    descuento,
    valoracion
}) => {
    const propsModal = { nombre, imagen:imagen[0], descripcion, precio, descuento, valoracion };
    return (
        <div className="border flex flex-col items-center m-2 p-2 gap-2 lg:flex-row">
            <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-1 w-fit border">
                    {imagen.map((item, index) => {
                        if (index === 0) return;
                        return (
                            <div key={index}>
                                <img
                                    src={item}
                                    height="100%"
                                    width="100%"
                                    alt={`Imagen del producto: ${nombre}`}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="flex border">
                    <img
                        height="100%"
                        width="100%"
                        src={imagen[0]}
                        alt={`Imagen principal del producto: ${nombre}`}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-medium">{nombre}</h1>
                <div>Valoracion: <strong>{valoracion}</strong></div>
                <p className="text-sm">{descripcion}</p>
                <p>
                    <strong>$ {precio}</strong> - Descuento: $ {descuento}
                </p>
                <div>
                    {/*  <button className="bg-[#d39435] p-2 rounded-lg text-white">Obtener</button> */}
                    <ModalObtener {...propsModal}/>
                </div>
            </div>
        </div>
    );
};

CardProduct.propTypes = {
    _id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    descuento: PropTypes.number.isRequired,
    imagen: PropTypes.arrayOf(PropTypes.string).isRequired,
    precio: PropTypes.number.isRequired,
    valoracion: PropTypes.number.isRequired,
};
