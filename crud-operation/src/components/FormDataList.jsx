import { IoMdContact } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export default function FormDataList({formList,setFormList,handleEdit}){
    const handleDelete = (id) =>{
        const dt = formList.filter(item => item.id !== id)
        setFormList(dt)
    }
    return(
        <div>
           <ul>
                {formList.map((i)=>(
                    <div className="m-2 gap-1">
                        <div className="flex gap-3 border border-black p-2  mx-auto rounded-md place-items-center relative">
                            <div className="absolute left-0">
                                <IoMdContact size="45px"/>
                            </div>
                            <div className="flex flex-col justify-center ml-10">
                                <div>{i.Name}</div>
                                <div>{i.Email}</div>
                            </div>
                            <div className="flex absolute right-0">
                                <RiEditCircleLine size="35px" onClick={()=>handleEdit(i.id)}/>
                                <MdDelete size="35px" onClick={()=>handleDelete(i.id)}/>
                            </div>                       
                        </div>
                        
                    </div>                   
                ))}
           </ul>
        </div>
    )
}