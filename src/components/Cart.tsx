import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  if (!isOpen) return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    console.error('Portal target #modal-root was not found in index.html')
    return null
  }

  return createPortal(
  <div
    className=" fixed inset-0 bg-black/40 z-40"
    onClick={onClose}
  >
    <div onClick={(e) => e.stopPropagation()} className="relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-50 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
      >
        ✕
      </button>
      {children}
    </div>
  </div>,
  modalRoot,
)
}

export default Modal