import EachItem from "./singleItem"

const ListItem = (props) => {
return ( 
<div>

{props.map ((image,index) => {
   return <EachItem image={image} key={index}/>
})}

</div>)




}
export default ListItem