import './Button.css'

export default function Button({ href, target, children, isGreen = false, className }) {
    return (
        <a className={`button ${className} ${isGreen ? 'green' : ''}`} href={href} target={target}>{children}</a>
    )
}