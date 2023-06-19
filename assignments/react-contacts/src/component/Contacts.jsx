export default function Contacts(props)  {
        return  (
                <div className="card">
                        <div className="card--name">
                                <h3 className="text-lg font-medium">Name</h3>
                                <p>{props.name}</p>
                        </div>
                        <div className="card--phone">
                                <h3 className="text-lg font-medium">Phone</h3>
                                <p>{props.phone}</p>
                        </div>
                        <div className="card--location">
                                <h3 className="text-lg font-medium">Location</h3>
                                <p>{props.location}</p>
                        </div>
                        <div>
                                <button className="">Edit</button>
                                <button className="bg-red-500">Delete</button>
                        </div>
                </div>
        );
}
