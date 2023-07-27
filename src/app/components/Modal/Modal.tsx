const Modal = ({
    children,
} : {
    children: React.ReactNode
}) => {
    return (
        <div className="modal modal-top	">
            {children}
        </div>
    )
}

export default Modal;