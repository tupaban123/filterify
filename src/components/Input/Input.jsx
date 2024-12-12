import './Input.css'

export default function Input({ id, title, placeholder }) {
    return (
        <div className='inputfield'>
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} placeholder={placeholder}/>
        </div>
    )
}