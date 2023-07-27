'use client'
import Modal from '../../components/Modal/Modal';
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()
    return (
        <Modal>
            <span onClick={() => router.back()}>Close</span>
            <h1>Login</h1>
        </Modal>
    )
}