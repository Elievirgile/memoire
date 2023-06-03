import React , {useState , useEffect} from 'react'
import {
    openKkiapayWidget,
    addKkiapayListener,
    removeKkiapayListener,
} from "kkiapay";



function Cerfifications() {

  const [error , setError] = useState("")

  function successHandler(response) {
    window.location.replace('/quizz')
  }


  function failed(response) {
   // console.log(response)
    alert('Paiment echoué , veuillez reessayer')
  }

  useEffect(() => {
    addKkiapayListener('success',successHandler)
    addKkiapayListener('failed',failed)
  }, []);


    function open() {
      openKkiapayWidget({
        amount: 5000,
        api_key: "fd40b500e50b11ec848227abfc492dc7",
        sandbox: true,
        email: "",
        phone: "",
      });
    }
  
    return (
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' , width:'100%'}} >
        <h2 className=''>Veuillez effectuer le paiement afin de poursuivre le test et d'obtenir une certification</h2>
        <button className='butstart' onClick={open}>Payer</button>
      </div>
    );
}
export default Cerfifications