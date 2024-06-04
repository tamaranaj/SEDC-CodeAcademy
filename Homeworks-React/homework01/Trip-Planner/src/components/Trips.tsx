import './Trips.css'

export const Trips = ()=>{
    const trips = ["Lisbon", "Moscow", "Amsterdam"]
    return(
        <div>
            <ol className="trips-list">
                {trips.map(trip=>(<li key={trip} className="trip">{trip}</li>))}
            </ol>

        </div>
    )
}
