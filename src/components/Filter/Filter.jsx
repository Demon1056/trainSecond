export const Filter = ({handlerInput, value})=>{
    return (<input value={value} onChange={handlerInput} type="text" name="filter"/>)
}