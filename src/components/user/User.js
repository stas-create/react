export default function User(props) {
    let {item: user,lift} = props;

    return (<div className='user'>
        <h2>{user.id} - {user.name} </h2>

        <button onClick={() => {
            lift(user)
        }}>Details
        </button>
    </div>);
}