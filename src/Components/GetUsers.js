import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'



function GetUsers() {
    const [users , setUsers] = useState([]);
    const [user_email , setUserEmail] = useState()
    const [error , setError] = useState('')

  

    const Deleteusers = ()=>{
      if(user_email === undefined){
        alert('Veuillez réessayer ')
      } else {
       //setError('')
       fetch('http://127.0.0.1:8000/api/deleteusers', {
         method: 'POST',
         headers: {
           'Accept':'application/json',
           'Content-Type':'application/json'
         },
         body:JSON.stringify({
           user_email:user_email,
         })
         
       })
       .then(response => response.json())
       .then((data) =>{
             
         console.log(data)
         if(data.statut === 'OK'){
           window.location.replace('/getusers')
         }
       //  setArtistes(data.users)
       
       })
      }
     }


    const getUsers = () => {
        fetch('http://127.0.0.1:8000/api/getusers', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
        /*     body:JSON.stringify({
               id_rythme:id_rythme
            }) 
            */
          })
          .then(response => response.json())
          .then((data) =>{
            console.log(data)
            if(data.users !== undefined){
           
              setUsers(data.users)
            
            }
             
          
          })
    }

    useEffect(()=>{
       getUsers()
    }, [])

  if(users.length === 0)  {
    return(
      <div style={{display:'flex', flexDirection:'column' , justifyContent:'center' ,  alignItems:'center' , width:'100%'}}>
         <div style={{backgroundColor:'black',display:'flex', flexDirection:'row',alignItems:'center' , height:'70px'}} className='nav_bar'> 
              <Link style={{textDecoration:'none' , borderRadius:'5px',color:'black',backgroundColor:'rgb(253, 197, 75)' , width:'70px' , height:"30px"}}  to='/admin' className='' >
                   Retour
              </Link>
              
          </div>  

        <div className='contain_nav_confirme_at'> 
           Aucun utilisateur
        </div>  


      </div>
    )
  } else {

  return (
    <div style={{display:'flex', flexDirection:'column' , justifyContent:'center' ,  alignItems:'center' , width:'100%'}}>
           
          <div style={{backgroundColor:'black',display:'flex', flexDirection:'row',alignItems:'center' , height:'70px'}} className='nav_bar'> 
              <Link style={{textDecoration:'none' , borderRadius:'5px',color:'black',backgroundColor:'rgb(253, 197, 75)' , width:'70px' , height:"30px"}}  to='/admin' className='' >
                   Retour
              </Link>
              
          </div>  


        <div style={{color:'red'}}>
         {error}
        </div>
        
        
      {
         users.map(eachUser =>  
          <div key={eachUser.user_email} style={{display:'flex', borderRadius:'10px',height:'300px',flexDirection:'column' , justifyContent:'space-between' , alignItems:'center', width:'80%',marginTop:'5%', marginBottom:'2%' , boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',}}> 
             <h3 > 
               {eachUser.nom_complet}
             </h3>
             <h3 > 
               {eachUser.user_email}
             </h3>


             <button onClick={()=>{
              setUserEmail(eachUser.user_email);
              Deleteusers(); 

              }} style={{display:'flex', flexDirection:'row', justifyContent:'center' , alignItems:'center',textDecoration:'none' ,border:'none', borderRadius:'5px',fontSize:'12px', height:'30px' , backgroundColor:'rgb(253, 197, 75)' ,color:'black', }}> 
                Supprimer l'utilisateur
             </button>
            

          </div>


        )
      }

    
    </div>
  )
  }

}

export default GetUsers;