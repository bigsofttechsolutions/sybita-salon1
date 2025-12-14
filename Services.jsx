
import { useState } from 'react'
const data={
 Men:[{n:'Haircut',p:'₹300'},{n:'Beard',p:'₹150'}],
 Women:[{n:'Haircut',p:'₹500'},{n:'Spa',p:'₹1200'}],
 Makeup:[{n:'Party',p:'₹2500'},{n:'Bridal',p:'₹15000'}]
}
export default function Services(){
 const[c,setC]=useState('Men')
 return(
  <div className='p-10'>
   <h1 className='text-3xl text-gold mb-4'>Services</h1>
   <select className='text-black mb-6' onChange={e=>setC(e.target.value)}>
    {Object.keys(data).map(x=><option key={x}>{x}</option>)}
   </select>
   {data[c].map((s,i)=><div key={i} className='flex justify-between border-b py-2'><span>{s.n}</span><span>{s.p}</span></div>)}
  </div>
 )
}
