export default function Card(props)  {
        return  (
                <div className="card">
                        <div className="card--name">
                                <h3>Name</h3>
                                <p>{props.name}</p>
                        </div>
                        <div className="card--phone">
                                <h3>Phone</h3>
                                <p>{props.phone}</p>
                        </div>
                        <div className="card--location"Card>
                                <h3>Location</h3>
                                <p>{props.location}</p>
                        </div>
                </div>
        );
}
