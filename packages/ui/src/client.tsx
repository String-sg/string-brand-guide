"use client"
import { useId, useRef } from 'react'
import type { SelectHTMLAttributes, ReactNode, KeyboardEvent } from 'react'
export function Select({label,id,...props}:SelectHTMLAttributes<HTMLSelectElement>&{label:string}) {
 const generated=useId(), resolved=id??generated
 return <div className="sui-field"><label htmlFor={resolved}>{label}</label><select {...props} id={resolved} className={`sui-select ${props.className??''}`} /></div>
}
export function Tabs({label,items,value,onChange}:{label:string;items:{id:string;label:string;content:ReactNode}[];value:string;onChange:(value:string)=>void}) {
 const prefix=useId(), refs=useRef<(HTMLButtonElement|null)[]>([])
 const navigate=(e:KeyboardEvent,index:number)=>{
   const next=e.key==='ArrowRight'?(index+1)%items.length:e.key==='ArrowLeft'?(index+items.length-1)%items.length:e.key==='Home'?0:e.key==='End'?items.length-1:null
   if(next!==null){e.preventDefault();onChange(items[next].id);refs.current[next]?.focus()}
 }
 return <div className="sui-tabs"><div role="tablist" aria-label={label}>{items.map((item,i)=><button key={item.id} ref={el=>{refs.current[i]=el}} id={`${prefix}-tab-${item.id}`} type="button" role="tab" aria-selected={value===item.id} aria-controls={`${prefix}-panel-${item.id}`} tabIndex={value===item.id?0:-1} onClick={()=>onChange(item.id)} onKeyDown={e=>navigate(e,i)}>{item.label}</button>)}</div>{items.map(item=><div key={item.id} role="tabpanel" id={`${prefix}-panel-${item.id}`} aria-labelledby={`${prefix}-tab-${item.id}`} hidden={value!==item.id}>{item.content}</div>)}</div>
}
