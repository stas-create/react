export default function Space(props) {
    let {item: value} = props;

    return (<div className='mini'>
        <h2>{value.mission_name}</h2>
        <p>
            {value.launch_year}
        </p>
        <img src={value.links.mission_patch_small}/>


    </div>);
}