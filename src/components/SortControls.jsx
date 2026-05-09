export default function SortControls ({ sortOrder, setSortOrder }) {

return(

    <>
   
   <div>
   
    <label> Sort by Price: </label>

    <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}>

            <option value="default"> Default</option>
            <option value="lowToHigh"> LowToHigh</option> 
            <option value="highToLow"> High to Low</option>

        </select>
        </div>
        </>
)
}