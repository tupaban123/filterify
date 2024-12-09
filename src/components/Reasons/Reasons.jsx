import Reason from './Reason/Reason'
import { reasons_data } from '../../data'
import './Reasons.css'

export default function Reasons() {
    return (
        <div className="reasons wrapper">
            <h2 className="reasons-title">How to use Filterify?</h2>
            <div className="reasons-content">
                {reasons_data.map((reason_data) => (
                    <Reason key={reason_data.step} {...reason_data} />
                ))}
            </div>
        </div>
    )
}