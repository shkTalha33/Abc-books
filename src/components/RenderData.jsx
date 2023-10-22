export default function RenderData({document,clicked}) {
    let showData;
    switch (clicked) {
        case "bookdescription":
          showData = document.bookdescription
            return( <p style={{fontSize:14,color:"grey",textAlign:"justify"}}>{showData}</p> )
            
            case "authordescription":
                 showData = document.authordescription
                return( <p style={{fontSize:14,color:"grey",textAlign:"justify"}}>{showData}</p> )
                case "bookreviews":
             showData = document.bookreviews
             return( <p style={{fontSize:14,color:"grey",textAlign:"justify"}}>{showData}</p> )
         
                case "bookcomment":
             showData = document.bookreviews
             return( <p style={{fontSize:14,color:"grey",textAlign:"justify"}}>{showData}</p> )
         
    
        default: 
        return null
           
    }  
}
