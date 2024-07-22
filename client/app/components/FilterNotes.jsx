"use client"
import React, {useState} from 'react'

//components
import InputTextbox from './InputTextbox';

const FilterNotes = () => {
    const [filter, setFilter] = useState("");
    const filterNotes = async() => {
        try {
            const body={filter};
            const response= await fetch(`http://localhost:5000/note/filter/${filter}`,{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };

  return (
    <div className="navbar flex-1">
          <form>
            <InputTextbox
              label="filter by tag"
              placeholder="search filter..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-warning btn-outline ml-2"
              onClick={() => filterNotes()}
            >
              Filter
            </button>
          </form>
        </div>
  )
}

export default FilterNotes
