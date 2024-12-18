import hero_img from '../../images/hero.png'
import Button from '../Button/Button'
import './Hero.css'

export default function Hero({ onLoginClick, onFilterClick, isLogged = false }) {
    return (
        <div className="hero wrapper">
            <img className="hero-img" src={hero_img} alt="" />
            <div className="hero-info">
                <h2 className='hero-info-title'>Find your perfect playlist</h2>
                <p className="hero-info-desc">Filterify is a free tool to help you filter playlists on Spotify by artists. Click below to get started.</p>
                <Button className='hero-button' isGreen={true} onClick={isLogged ? onFilterClick : onLoginClick}>{isLogged ? 'Filter playlist' : 'Log in with Spotify'}</Button>
            </div>
        </div>
    )
}