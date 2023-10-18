export const Contacts = ({data})=>{
    return data.length>0&&(<ul>{data.map((item)=><li key={item.id}><span>{item.name}:
    </span><span>{item.number}</span></li>)}</ul>)
    }