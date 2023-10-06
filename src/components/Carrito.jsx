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

export function Carrito() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { getCarrito, getCarritoCount, getCarritoTotal } = useCarrito();

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
                        <ModalHeader>Detalles</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col items-center">

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="warning"
                                    variant="solid"
                                    onPress={onClose}
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



