import react from "react";

function Nav(props){
    const backgroundApp="#464775 "
const container_nav={
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    background:`${backgroundApp}`,
    padding:"10px"

}
    
const toogle_button={
    width:"15%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around"
}
   
const text_container_input={
   
    width:"40%"
}
const text_box_input={
   
    width:"100%",
    display:"block"
}
const text_block={
    color:"#fafafa"
}

return(
<div style={container_nav}>
   <div className="toogle-button" style={toogle_button} >
       <a href="" >1</a>
       <p style={text_block}>Microsoft Teams</p>
       </div> 
       <div className="text-box-input" style={text_container_input}>
           <input type="text" style={text_box_input}></input>
       </div>
       <div className="toogle-button">
       <a href="" >3</a>
       <a href="" >4</a>
       </div> 
</div>
    
)
}

export default Nav;