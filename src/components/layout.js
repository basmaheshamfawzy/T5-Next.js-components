import"../app/globals.css";
import Header from "./header";
import Footer from "./footer";
export default function Layout({childern}){
 
    return(
     

       <div>
        
        <header></header>
            {childern}
            <footer></footer>
       </div>
        
    )
}