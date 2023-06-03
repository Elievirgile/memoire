import React , {useState} from 'react'
import { Link } from 'react-router-dom'


function Home_professeur() {


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [duree, setDuree] = useState('')
  const [nombreDeChapitre, setNombreDeChapitre] = useState(0)
  const [Professeur, setProfesseur] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [file, setFile] = useState(null)
  const [error , setError] = useState('')

  const [quest1 , setQuestOne] = useState('')
  const [qoneRone , setQoneRone] = useState('')
  const [qoneRtwo , setQoneRtwo] = useState('')
  const [qoneRthree , setQoneRthree] = useState('')


  const [quest2 , setQuestTwo] = useState('')
  const [qtwoROne , setQtwoRone] = useState('')
  const [qtwoRtwo , setQtwoRtwo] = useState('')
  const [qtwoRthree , setQtwoRthree] = useState('')

  const [quest3 , setQuestThree] = useState('')
  const [qthreeRone , setQthreeRone] = useState('')
  const [qthreeRtwo , setQthreeRtwo] = useState('')
  const [qthreeRthree , setQthreeRthree] = useState('')
  const [myInputs , setMyinputs] = useState([title, description, duree , nombreDeChapitre , Professeur , thumbnail , file , quest1 , qoneRone , qoneRthree , qoneRtwo , quest2, quest3 , qtwoROne , qtwoRtwo , qtwoRthree , qthreeRone , qthreeRtwo , qthreeRthree])
 

  const saveCourse = ()=>{

    const formation = new FormData();
    formation.append('image', file)
    formation.append('titre', title)
    formation.append('description', description )
    formation.append('duree', duree)
    formation.append('nombredechapitre', nombreDeChapitre )
    formation.append('thumbnail', thumbnail )
    formation.append('professeur', Professeur )


    formation.append('question1', quest1 )
    formation.append('q1R1', qoneRone )
    formation.append('q1R2', qoneRtwo )
    formation.append('q1R3', qoneRthree )


    formation.append('question2', quest2 )
    formation.append('q2R1', qtwoROne )
    formation.append('q2R2', qtwoRtwo )
    formation.append('q2R3', qtwoRthree )

    

    formation.append('question3', quest3 )
    formation.append('q3R1', qthreeRone)
    formation.append('q3R2', qthreeRtwo )
    formation.append('q3R3', qthreeRthree )

    

   
   fetch('http://127.0.0.1:8000/api/insertFormation', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
       
      },
      body:formation,
     
    })
    .then(response => response.json())
    .then((data) =>{
      console.log(data)
    })
  }



  const checkIfEmpty = ()=>{
     if(title === '' || description === '' || duree === '' || nombreDeChapitre === '' || Professeur === '' || thumbnail === '' || file === '' || quest1 === '' || qoneRone === '' || qoneRtwo === '' || qoneRthree === '' || quest2 === '' || qtwoROne === ''|| qtwoRtwo === '' || qtwoRthree === '' || quest3 === ''|| qthreeRone === '' || qthreeRtwo === '' || qthreeRthree === '' ){
        setError('Aucun champs vide'); 
     } else if(title !== '' && description !== '' && duree !== '' && nombreDeChapitre !== '' && Professeur !== '' && thumbnail !== '' && file !== '' ||  quest1 !== '' && quest2 !== '' && quest3 !== '' && qoneRone !== '' && qoneRtwo !== '' && qoneRthree !== '' && qtwoROne !== '' && qtwoRtwo !== '' && qtwoRthree !== '' && qthreeRone !== '' && qthreeRtwo !== '' && qthreeRthree !== ''){
        setError('')
        saveCourse()
     } 
   
  }


  return (
 
     
        
        <div className='contain_home_template'>
          <h2 className=''>
               Enregistrer une formation 
          </h2>

           <div style={{width:'100%',display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center' }} className=''>
               
            <form style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center' , width:'100%', height:'700px'}} encType='multipart/form-data</form>'>
                <input onChange={(e)=>{setTitle(e.target.value)}}  className='con_inpone' type='text' placeholder='Titre de la formation'/>
               
                <input onChange={(e)=>{setDescription(e.target.value)}}  className='con_inpone' type='text' placeholder='Description de la formation'/>

                <input onChange={(e)=>{setDuree(e.target.value)}}  className='con_inpone' type='text' placeholder='Durée estimée de la formation'/>

                <input onChange={(e)=>{setNombreDeChapitre(e.target.value)}}  className='con_inpone' type='text' placeholder='Nombre de chapitre de la formation'/>

                <input onChange={(e)=>{setProfesseur(e.target.value)}}  className='con_inpone' type='text' placeholder='Professeur la formation'/>

                <p className=''>
                   Fichier pdf du cours
                </p>

                <input onChange={(e)=>{setFile(e.target.files[0])}}  className='' type='file' placeholder=''/>

                <p className=''>
                   Logo
                </p>
                <input onChange={(e)=>{setThumbnail(e.target.files[0])}}  className='' type='file' placeholder=''/>
            </form> 




            <h2 className=''>
              Vous devez maintenant enregistrer une evaluation pour cette formation
            </h2>


            <form style={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center' , width:'100%',}} encType='multipart/form-data</form>'>
                <h3 className=''>
                   Question 1
                </h3>

                <input onChange={(e)=>{setQuestOne(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>


                <h3 className=''>
                   Veuillez une bonne reponse a cette question
                </h3>
               
                <input onChange={(e)=>{setQoneRone(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                <h3 className=''>
                   Veuillez entrer un mauvais résultat à cette question
                </h3>

                <input onChange={(e)=>{setQoneRtwo(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                <h3 className=''>
                   Veuillez entrer un mauvais résultat à cette question
                </h3>

                <input onChange={(e)=>{setQoneRthree(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>
                
                {/* Question2 */}


                <h3 style={{marginTop:'2%'}} className=''>
                   Question 2
                </h3>

                <input onChange={(e)=>{setQuestTwo(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>


                <h3 className=''>
                   Veuillez une bonne reponse a cette question
                </h3>
               
                <input onChange={(e)=>{setQtwoRone(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                <h3 className=''>
                   Veuillez entrer un mauvais résultat à cette question
                </h3>

                <input onChange={(e)=>{setQtwoRtwo(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                <h3 className=''>
                   Veuillez entrer un mauvais résultat à cette question
                </h3>

                <input onChange={(e)=>{setQtwoRthree(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>


               {/* Question3*/}


                <h3 style={{marginTop:'2%'}}  className=''>
                   Question 3
                </h3>

                <input onChange={(e)=>{setQuestThree(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>


                <h3 className=''>
                   Veuillez une bonne reponse a cette question
                </h3>
               
                <input onChange={(e)=>{setQthreeRone(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                <h3 className=''>
                   Veuillez entrer un mauvais résultat à cette question
                </h3>

                <input onChange={(e)=>{setQthreeRtwo(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                <h3 className=''>
                   Veuillez entrer un mauvais résultat à cette question
                </h3>

                <input onChange={(e)=>{setQthreeRthree(e.target.value)}}  className='con_inpone' type='text' placeholder=''/>

                
            </form> 


              
              
                <p style={{color:'red'}} className=''>
                  {
                    error
                  }
                </p>

                <Link onClick={checkIfEmpty}  style={{textDecoration:'none'}} to='' className='connect_me' >
                   Enregistrer
                </Link>
            
           </div>   
        
        </div>   
  
 
  )
}

export default Home_professeur