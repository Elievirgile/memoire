import React , {useState} from 'react'
import Userlog from '../img/user.png'
import '../CSS/Login.css'
import Logo_one from '../img/music.png'
import { Link } from 'react-router-dom'

export default function Login() {
  const [user_email , setUserEmail] = useState(''); 
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');


  const connectUsers = ()=>{
   
    fetch('http://127.0.0.1:8000/api/connect_user', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        user_email:user_email,
        password:password, 
      })
     
    })
    .then(response => response.json())
    .then((data) =>{
        
      console.log(data)
      if(data.statut === 'OK' ){

        setError('')

        if(data.user[0].typeofuser === 'professeur'){

          localStorage.setItem('myuser', JSON.stringify(data.user))
          window.location.replace('/acceuilprof')
          
        }else if(data.user[0].typeofuser === 'etudiant'){
          localStorage.setItem('myuser', JSON.stringify(data.user))
          window.location.replace('/acceuilapprenant')
        }
        else if(data.user[0].typeofuser === 'admin'){
          localStorage.setItem('myuser', JSON.stringify(data.user))
          window.location.replace('/admin')
        }
      } else if(data.statut === 'Bad credentials' ){
          setError(data.statut)
      }
      
     })

  }

  const handleEmptyConnect = ()=>{
  
       if(user_email === '' || password === '' ){
         setError('Aucun champs vide')
       } else if(user_email !== '' && password !== ''){
        setError('');
        connectUsers();
       }
   }



  return (
    <div className='contain_login'>
      
      <div className='contain_firstpart' >
         
          <div className='containlogimg'>
            <img src={Userlog} className='logimg' /> 
          </div>

          <h2 className=''>
             Se connecter  
          </h2>
         

      </div>

      <div className='contain_secondpart' >
        
       
       
        <div className='contain_form' >
          
        
           
            <input onChange={(e)=>{setUserEmail(e.target.value)}} className='con_inpone' type='email' placeholder='Veuillez entrer votre numéro de téléphone'/>

            <input onChange={(e)=>{setPassword(e.target.value)}}  className='con_inpone' type='password' placeholder='Veuillez entrer votre mot de passe'/>

            <p style={{color:'red'}}> {error}  </p>

            <Link onClick={handleEmptyConnect}  style={{textDecoration:'none'}} to='' className='connect_me' >
                Se connecter
            </Link>

            <div
             className='rester_connecter'
             >
              <div className='f_child'>

                <input
                  className=''
                  type='checkbox'
                />
                <p> Rester connecté  </p>

             </div>

              <div className=''>

                <a className='designColor' style={{textDecoration:'none' , color:'  color: white'}} href='#'> Mot de passe oublié  </a>
                
             </div>

            </div>

            <a style={{textDecoration:'none'}} href='/inscription' >
                S'inscrire
            </a>


        </div>


        <div className='contain_img' >
          <img src={'https://i.pinimg.com/564x/eb/72/ec/eb72ec5388f609b921ae9cce67e843af.jpg'} className='logoOne'/>
        </div>
  
  

      </div>


    </div>
  )
}
