export default function Flight({props}) {
    return (
        <div className={'flight_block'}>
            <b>{props.mission_name}</b> - {props.launch_year} <img src={props.links.mission_patch_small} alt={props.mission_name}/>
        </div>
    );
};