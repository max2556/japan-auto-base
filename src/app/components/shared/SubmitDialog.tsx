import Button from "./Button";
import { ModalProps, Modal } from "./Modal";

export function SubmitDialog({open, setOpen}:ModalProps) {
  const onclick = () => {
    setOpen(false);
    //TODO: submit ?
  }
  
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="p-4 flex flex-col">
        <h2 className="mb-2">Оставьте заявку!</h2>
        <p className="text-sm leading-4 mb-1">Ваш номер телефона</p>
        <input className="p-1" type="tel" placeholder="+7 (___) ___-__-__" name="phone"></input>
        <Button red onClick={() => onclick()} className="mx-4 mt-2">
          Отправить
        </Button>
      </div>
    </Modal>
  )
}