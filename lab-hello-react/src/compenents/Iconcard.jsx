
function Iconcard (props){


    return (
        <div className="card">
            <img src={props.iconImg} alt="" />
            <h2>{props.iconName}</h2>
            <p>{props.iconText}</p>
        </div>

    )
}
export default Iconcard