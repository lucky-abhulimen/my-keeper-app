import './App.css';
const date = new Date().getFullYear();

const Footer =() => {

        return(
         <footer>
          <p>copyright &copy;{date}</p> 
         </footer>
        )
}



export default Footer;