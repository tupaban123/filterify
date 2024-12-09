import './Reason.css'

export default function Reason({ step, title, description}) {
    return (
        <div className="reason">
            <div className="reason-info">
                <h2 className="reason-step">Step #{step}</h2>
                <h4 className="reason-title">{title}</h4>
                <p className="reason-desc">{description}</p>
            </div>
        </div>
    )
}