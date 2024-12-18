import { useIsFetching } from "@tanstack/react-query";
import { Modal, ModalBackdrop } from "./ui/modal";
import { Spinner } from "./ui/spinner";

function Loader() {
  const isFetching = useIsFetching() > 0;
  return (
    <Modal isOpen={isFetching}>
      <ModalBackdrop />
      <Spinner size="large" />
    </Modal>
  );
}

export default Loader;
