import hero_img from '../../images/filter-hero.png'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './FilterPage.css'

export default function FilterPage() {
    return (
        <div className="wrapper">
            <img src={hero_img} alt="" />

            <div className="filter-page-info">
                <h2 className="filter-page-title">Filter playlist by artists</h2>
                <p className="filter-page-desc">I will create new playlist on your account only with artists you add</p>
            </div>

            <form action="" className="filter-page-form">
                <Input id='playlist' title='Playlist link' placeholder='Enter playlist link'></Input>
                <Input id='artists' title='Artists' placeholder='Enter artists'></Input>
                <Button className='filter-page-form-button' isGreen={true}>Add</Button>
            </form>
        </div>
    )
}