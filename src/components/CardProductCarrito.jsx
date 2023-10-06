export const CardProductCarrito = ({
    nombre,
    imagen,
    precio,
    descuento,
    cantidad,
}) => {
    return (
        <div className="flex flex-row items-center w-full justify-around flex-nowrap gap-1 border-3 p-1">
            <div className="border w-14">
                <img width="100%" height="100%" src={imagen} alt="" />
            </div>
            <div className="flex flex-col w-fit">
                <h1 className="line-clamp-1 font-semibold w-32">{nombre}</h1>
                <p className="border-2">Cantidad: {cantidad}</p>
            </div>
            <div className="flex flex-col flex-nowrap w-fit">
                <p className="font-semibold w-fit">$ {precio * cantidad}</p>
                <p className="w-fit">Descuento: {descuento}</p>
            </div>
        </div>
    );
};
