
function Refresh() {
    // Button to refresh the page
    return (
        <button style={{ height: '2rem', display: 'inline-block', verticalAlign: 'middle', fontSize: '1rem', cursor: 'pointer' }}
         onClick={() => window.location.reload()}>Refresh</button>
    )
}

export default Refresh;