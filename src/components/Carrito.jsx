import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    ModalHeader,
} from "@nextui-org/react";
import { useCarrito } from "../states/CarritoState";
import { CardProductCarrito } from "./CardProductCarrito";

export function Carrito() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { carrito } = useCarrito();
    const getTotalCarrito = () => {
        let total = 0;
        carrito.forEach((producto) => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    };

    return (
        <>
            <Button onPress={onOpen} color="warning" className="mr-2">
                Obtener
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Detalles</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col items-center gap-2">
                                    {carrito.length === 0 ? (
                                        <p>No hay productos en el carrito, <strong>¡Compra ahora!</strong></p>
                                    ) : (
                                        carrito.map((producto, index) => (
                                            <CardProductCarrito
                                                key={index}
                                                {...producto}
                                            />
                                        ))
                                    )}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <div className="flex flex-col w-full gap-1">
                                    <div className="flex flex-row justify-between">
                                        <p>Total: </p>
                                        <p>$ {getTotalCarrito()}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button
                                            color="warning"
                                            variant="solid"
                                            onPress={onClose}
                                            isDisabled={(carrito.length === 0) ? true : false}
                                        >
                                            Pagar
                                        </Button>
                                    </div>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
