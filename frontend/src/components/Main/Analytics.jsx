import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Analytics({display}) {

  const [catList, setCatList] =useState([{comp_id: -1, comp_cat : "-- Select Category --"}]);
  const [itemList, setItemList] =useState([{item_id:-1, item_name:"--No Items Selected--"}]);

  const categoryRef = useRef(null);
  const itemRef = useRef(null);


  const serverURL = import.meta.env.VITE_SERVER_URL;
  const adminId = import.meta.env.VITE_ADMIN_ID;
  const categoriesEndpoint = '/analytics/categories'
  const itemsEndpoint = '/analytics/category/';
  const demandEndpoint = '/analytics/demanddata';
  const query = `?adminId=${adminId}`;
  // get the data for categories.
  useEffect(() => {
    const fetchCategories = async () => {
      let errorFlag = false;
      const res = await fetch(serverURL + categoriesEndpoint + query, {
        method : "GET"
      });
      if(res.status !== 200)errorFlag = true;
      const response = await res.json();
      if(errorFlag){
        errorFlag = false;
        console.log(response.message);
        return;
      }
      setCatList(prev => [{comp_id: -1, comp_cat : "-- Select Category --"}, ...response.compartmentsList]);
    }
    fetchCategories();
  }, [])
  // get the data for items for the selected category
  const onSelectChangeHandler = async (e) => {
    const comp_id = e.target.value;
    if(comp_id === -1) return setItemList(prev => [{item_id:-1, item_name:"--No Items Selected--"}]);
    const errorFlag = false;
    const res = await fetch(serverURL + itemsEndpoint + comp_id + query, {
      method : "GET"
    });
    if(res.status !== 200) errorFlag = true;
    const response = await res.json();
    if(errorFlag) {
      errorFlag = false;
      console.log(response.message);
      return;
    }
    setItemList(prev => [{item_id:-1, item_name:"--No Items Selected--"}, ...response.itemsList]);
  }

  const onSubmitHandler = async (e) => {
    const comp_id = categoryRef.current.value;
    const item_id = itemRef.current.value;
    const queryAddOn = `&comp_id=${comp_id}&item_id=${item_id}`;
    let errorFlag = false;
      const res = await fetch(serverURL + demandEndpoint + query + queryAddOn, {
        method : "GET"
      });
      if(res.status !== 200)errorFlag = true;
      const response = await res.json();
      if(errorFlag){
        errorFlag = false;
        console.log(response.message);
        return;
      }
      console.log(response);
  }
  
  return (
    <div className={ "flex justify-center items-center " + (display ? "block":"hidden")}>
      <form>
        <div className='flex gap-2'>
          <div>
            <label htmlFor="category" className='block text-lg'>Select Category</label>
            <select ref={categoryRef} onChange={onSelectChangeHandler} name="category" id="category" className='text-xl p-1 appearance-none outline-none rounded border-2 border-gray-600'>
              {catList.map(cat => {
                return (<option value={cat.comp_id} key={cat.comp_id}>{cat.comp_cat}</option>)
              })}
            </select>
          </div>
          <div>
            <label htmlFor="items" className='block text-lg'>Select Item</label>
            <select ref={itemRef} name="item" id="item" className='text-xl p-1 appearance-none outline-none rounded border-2 border-gray-600'>
              {itemList.map(item => {
                return (<option value={item.item_id} key={item.item_id}>{item.item_name}</option>)
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button onClick={onSubmitHandler} type='button' className='text-xl p-2 border-2 border-gray-800 rounded-lg active:bg-slate-600 active:text-white'>Display Analytics</button>
        </div>
      </form>
    </div>
  )
}

export default Analytics