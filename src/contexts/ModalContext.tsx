import { createContext, useContext, ComponentProps, useState } from 'react'
import { createPortal } from 'react-dom'

import Modal from '@/components/shared/Modal'

type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
    open: (options: ModalOptions) => void
    close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValue: ModalProps = {
    open: false,
    body: null,
    onLeftButtonClick: () => {},
    onRightButtonClick: () => {},
}

export function ModalContext({ children }: { children: React.ReactNode }) {
    const [modalState, setModalState] = useState<ModalProps>(defaultValue)

    const $portal_root = document.getElementById('root-portal')

    const open = (options: ModalOptions) => {
        setModalState({ ...options, open: true })
    }

    const close = () => {
        setModalState(defaultValue)
    }

    const values = {
        open,
        close,
    }

    return (
        <Context.Provider value={values}>
            {children}
            {$portal_root != null
                ? createPortal(<Modal {...modalState} />, $portal_root)
                : null}
        </Context.Provider>
    )
}

export function useModalContext() {
    const values = useContext(Context)

    if (values == null) {
        throw new Error('ModalContext안에서 사용되어야 합니다.')
    }

    return values
}
