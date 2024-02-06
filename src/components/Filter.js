function Filter(props) {
    const filter = props.filter;
    const category = props.category;
    const setCategory = props.setCategory;
    function FilterHandler(title){
        console.log(title);
        setCategory(title);
    }
    return (
        <div>
            {filter.map((filterData) => {
                return <button key={filterData.id} onClick={()=>FilterHandler(filterData.title)}>{filterData.title}</button>
            })}
        </div>
    )
}
export default Filter