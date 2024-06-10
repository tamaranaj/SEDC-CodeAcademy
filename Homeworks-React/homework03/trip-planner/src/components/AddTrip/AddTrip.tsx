import { useState } from 'react'
import './AddTrip.css'
import { Trip } from '../../trip.data'

interface AddTripProps{
    trips: (newTrip: Trip) => void
}
export const AddTrip =({trips }: AddTripProps)=>{
    
    const[title, setTitle] = useState("")
    const[destination, setDestination] = useState("")
    const[budget, setBudget] = useState("")
    const[image, setImage] = useState("")
    
    const click=(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        const newTrip: Trip = {
            id: Date.now(),
            title: title,
            destination: destination,
            status: "PLANNING",
            budget: Number(budget),
            image: image
        }
        console.log(newTrip)
        trips(newTrip)
    }
 return(
    <div>
        <h1>ADD TRIP</h1>

        <div>
            <form action="">
                <label htmlFor="title"> Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(event)=>{setTitle(event.target.value)}} />
                <label htmlFor="destination">Destination:</label>
                    <input type="text" name="destination" id="destination" value={destination} onChange={(event)=>{setDestination(event.target.value)}} />
                <label htmlFor="budget">Budget:</label>
                    <input type="text" name="budget" id="budget" value={budget} onChange={(event)=>{setBudget(event.target.value)}}  />
                <label htmlFor="image">Image:</label>
                    <input type="file" name="image" id="image" value={image} onChange={(event)=>{setImage(event.target.value)}} />

                <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>click(event)}>Create Trip</button>
            </form>
        </div>
    </div>
 )

}
