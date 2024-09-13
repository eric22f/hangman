
function Refresh() {
    // Button to refresh the page
    return (
        <button style={{ height: '2rem', display: 'inline-block', verticalAlign: 'middle',
            fontSize: '1rem', cursor: 'pointer', padding: '0 1rem', backgroundColor: 'white',
            border: '1px solid black', borderRadius: '5px', color: 'black'}}
         onClick={() => window.location.reload()}>Refresh</button>
    )
}

export default Refresh;