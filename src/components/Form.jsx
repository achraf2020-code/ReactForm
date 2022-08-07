import { useState } from "react"

const Form = ()=>{
    const [formData ,setFormData] = useState({
        firstName:"",
        lastName:"",
        comment:"",
        isFriendly:"",
        employment:"",
        color:"",
    })
    
    const handleChange =(e)=>{
        const {name,value,type,checked} = e.target
        setFormData((prevState)=>{
            return {
                ...prevState,
                [name]:type==="checkbox" ?checked:value
            }
        })
        console.log(formData)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return(
        <div className="form" onSubmit={handleSubmit}>
           <form>
            <h1>Sign Form</h1>
                <input 
                    type="text"
                    placeholder="First name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last name" 
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <textarea 
                    placeholder="comment!"
                    onChange={handleChange}
                    name="comment"
                    value={formData.comment}
                />
                <div className="div-check">
                    <input 
                        id ="isFriendly"
                        type="checkbox" 
                        name="isFriendly" 
                        checked = {formData.isFriendly}
                        onChange={handleChange}
                        />
                        <label  htmlFor ="isFriendly" className="form-label">Are you friendly?</label>
                 </div>  
                 <fieldset>
                    <legend>Current employement status</legend>
                    
                    <input 
                        type="radio" 
                        name="employment" 
                        id="unemployed" 
                        value="unemployed"
                        onChange={handleChange}
                        />
                    <label htmlFor="unemployed">Unemployed</label>
                   <br/>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="full-time" 
                        value="full-time"
                        onChange={handleChange}
                    />
                     <label htmlFor="full-time">Full-time</label>
                     <br/>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="part-time" 
                        value="part-time"
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                </fieldset>
             
                <label htmlFor="color" className="div-sel">Choose fav color?
                <br/>
                <select name="color" id="color" onChange={handleChange} value={formData.color}>
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="bleu">Bleu</option>
                </select>
                </label>
                <button>Submit</button>
           </form>
        </div>
    )
}
export default Form