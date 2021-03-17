import ButtonContainer from "./ButtonContainer"
function Hero() {
    const styles = {
        background: "red",
        height: 40,
        width: 150,
        borderRadius: 75,
        color: "white"
    }
    return (
        <header>
            <div className="hero">
                <h2>React Application</h2>
                <h4>It is a JavaScript library for creating rich UserInterfaces </h4>
                <ButtonContainer styles={styles} title="Book Now"/>
            </div>
        </header>
    )
    
}
export default Hero;