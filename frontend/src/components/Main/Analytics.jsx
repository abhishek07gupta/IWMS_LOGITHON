import React, { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Analytics({display}) {

  const serverURL = import.meta.env.VITE_SERVER_URL;
  const categoriesEndpoint = '/analytics/compartments'
  // get the data for categories.
  useEffect(() => {
    const fetchCategories = async () => {
      
    }
  }, [])
  // get the data for items for the selected category
  
  return (
    <div className={ "flex justify-center items-center " + (display ? "block":"hidden")}>
      <form className='flex gap-2'>
        <div>
          <label htmlFor="category" className='block'>Select Category</label>
          <select name="category" id="category" className='text-xl p-1 appearance-none outline-none rounded border-2 border-gray-600'>
            <option value="1">Something</option>
            <option value="1">Good</option>
            <option value="1">Bad</option>
          </select>
        
        </div>
      </form>
    </div>
  )
}

export default Analytics