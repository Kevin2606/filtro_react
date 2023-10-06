import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useCarrito } from "../states/CarritoState";
export function ModalObtener({
    _id,
    nombre,
    imagen,
    descripcion,
    precio,
    descuento,
    valoracion,
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [cantidad, setCantidad] = useState(1);
    const { addCarrito } = useCarrito();
    const agregarAlCarrito = () => {
        const producto = {
            _id,
            nombre,
            imagen,
            precio,
            descuento,
            cantidad: parseInt(cantidad),
        };
        addCarrito(producto);
    };

    return (
        <>
            <Button onPress={onOpen} color="warning">
                Obtener
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className="flex flex-col gap-3">
                                    <div className="border-b-5">
                                        <img src={imagen} alt="" />
                                    </div>
                                    <h1 className="font-medium">{nombre}</h1>
                                    <p>
                                        Valoracion:
                                        <strong>{valoracion}</strong>
                                    </p>
                                    <p className="h-40 overflow-scroll">
                                        {descripcion}
                                    </p>
                                    <p>
                                        <strong>$ {precio}</strong> - Descuento:
                                        $ {descuento}
                                    </p>
                                    <Input
                                        type="number"
                                        min={1}
                                        defaultValue={1}
                                        placeholder="Digite la cantidad"
                                        label="Cantidad"
                                        onChange={(e) =>
                                            setCantidad(e.target.value)
                                        }
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="warning"
                                    variant="solid"
                                    onPress={
                                        () => {
                                            agregarAlCarrito();
                                            onClose();
                                        }
                                    }
                                >
                                    Agregar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

ModalObtener.propTypes = {
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    descuento: PropTypes.number.isRequired,
    valoracion: PropTypes.number.isRequired,
};

