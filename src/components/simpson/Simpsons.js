export default function Simpsons (props) {
    let {itemName, pic} = props;
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img className={'image'} src={pic}/>
        </div>
    )
    
}