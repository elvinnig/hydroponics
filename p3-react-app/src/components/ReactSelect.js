
const ReactSelect = ({image, label}) => {
  return (
    <div>
        <select>
           <option>{label}</option> 
        </select>
        {image}
    </div>
  )
}

export default ReactSelect