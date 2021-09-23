export default function navigation(props) {

    return (<>

        <div className="bg-header p-md-4 p-3">
            <div className="text-center text-white">
                <h1 className="">{props.navigation}</h1>
                {props.nav !== ''|| props.nav !== undefined  ?
                    <p>{props.nav}</p>
                    : null}
            </div>
        </div>
    </>);

}