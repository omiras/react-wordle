export default function Letter({ letter, bgColor }) {

    const styles = {
        padding: "1rem",
        width: "20px",
        height: "20px",
        backgroundColor: bgColor,
        borderRadius: "8px",
        color: 'white',
        border: '2px solid black'
    }

    return <div style={styles}>{letter}
    </div>
}