import globe from '../resources/globe.png';
export default function Header() {
    return (
    
        <header>
            <img src={globe} alt="globe" className="globe" />
            <h1>my travel journal.</h1>
        </header>
    )
}

