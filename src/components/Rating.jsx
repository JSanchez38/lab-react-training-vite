
function Rating (props) {
    const { children } = props

    const rate = Math.round(parseFloat(children))



    return (
        <div>{rate}</div>
    )
}

export default Rating