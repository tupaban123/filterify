import './Button.css'

export default function Button({ href, target, children, isGreen = false, className, onClick }) {
    return (
        <a onClick={onClick} className={`button ${className} ${isGreen ? 'green' : ''}`} href={href} target={target}>{children}</a>
    )
}