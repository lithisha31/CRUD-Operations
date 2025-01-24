import { useState } from "react"
import FormDataList from "./FormDataList"
import { v4 as uuid} from "uuid";

export default function Form(){
    const [formData, setFormData] = useState({Name:"",Email:""})

    const[formList, setFormList] = useState([
        {id:1,Name:"Lithisha", Email:"lithisha@gmail.com"},
        {id:2,Name:"Lithi", Email:"lithi@gmail.com"}
    ]);

    const changeData = (e) =>{
        setFormData((currData) => {
            return{
                ...currData,
                [e.target.name] : e.target.value,
            }
        })
    }

    const handleEdit = (id) =>{
        const dt = formList.filter(item => item.id == id)
        console.log(dt)
        // dt[0].id = uuid();
        console.log(dt[0].Name)
        setFormData(dt[0])
    }

    const handleUpdate = () =>{
        const index = formList.map((item) =>{
            return item.id               
        }).indexOf(formData.id)
        console.log(index);

        const dt = [...formList]
        console.log(dt)
        dt[index].id = uuid();
        dt[index].Name = formData.Name;
        dt[index].Email = formData.Email;
        setFormList(dt);
        setFormData({Name:"", Email:""})
    }

    const addData = () =>{
        console.log(formData)
        setFormList((currFormData) =>{
            return[...currFormData,{id:uuid(),...formData}]});
        setFormData({Name:"", Email:""})
    }

    return(
        <div>
            <div className="border border-black p-2 m-2 rounded-sm flex flex-col gap-3 mb-3">
                <form className="flex flex-col gap-1">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" placeholder="Enter your Name" value={formData.Name} name="Name" onChange={changeData} className="border border-gray-200"/>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Enter your Email" value={formData.Email} name="Email" onChange={changeData} className="border border-gray-200"/>
                </form>
                <div className="flex place-items-end gap-1 justify-end">
                    <button className="h-6 w-[8rem] border border-black bg-black text-white" onClick={addData}>Add Contact</button>
                    <button className="h-6 w-[8rem] border border-black bg-black text-white" onClick={()=>handleUpdate()}>Update Contact</button>
                </div>
                
            </div>
            <FormDataList formList={formList} setFormList={setFormList} handleEdit={handleEdit}/>
        </div>
    )
}