import React, { useState , useEffect} from 'react';
import  {Link} from 'react-router-dom'

function Quizz() {

  const [formation_id , setFormatinId] = useState(localStorage.getItem('formation_id'));
  const [my_questions , setQuestions ] = useState([]);
  const [answers , setAnswers] = useState([])
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(null)
  const [result, setResult] = useState(0)
  const [error , setError] = useState('')
  const [numbOfAttempte , setNumbOfAttempte] = useState(0)


  const getEvaluation = ()=> {
       
   fetch('http://127.0.0.1:8000/api/getevaluation', {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      id_formation:formation_id
    })
   
  })
  .then(response => response.json())
  .then((data) =>{
    console.log(data)
    setQuestions(data[0])
    setAnswers(data[1])
  })
  }


  useEffect(()=>{
    getEvaluation()
  }, [])


  useEffect(()=>{
   
   

    if(result < 0 ){
      setResult(0)
    } 

    if(count >= 3){
      if(result >= 2 ){
        setError('Félicitation votre certification sera envoyé par email')
        setTimeout( ()=>{window.location.replace('/acceuilapprenant')}, 3000)
      } else if( result < 2){
        setError('Vous devez atteindre un quota de 2/3 au moins pour avoir une certification')
        /*localStorage.setItem('numbOfAttempte' , (numbOfAttempte+1)) */
        setTimeout( ()=>{window.location.replace('/acceuilapprenant')}, 3000)
        
        
      }
    }
     
    
  }, [ result , count])

  if(count < 3){


    return (
      <>
        <h1 className='header'>Quiz</h1>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center' , width:'100%',}} className="app">
           {
            my_questions.map((question, index) => { 
              if(index === count){
                return(
                  <>
                  <h3 key={index} style={{fontWeight:'bold'}} > 
                   ./  { question}
                  </h3>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
                   {  answers[index].map( answer =>
                    < div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}> 
                      <input 
                      type='radio'
                      name={answer.id_question}
                      value={answer.isCorrect}
                      id="regular"
  
                      onChange={(e)=> {
                        
                      }}
                      onClick={
                        (e)=> {
                         
                          if(e.target.value == 1){
                            setResult(result + 1)
                          } else if(e.target.value == 0){
                            setResult(result )
                          }
                      
                          setCount(count+1)
                        }
                      
                      }
                      /> 
                  
                      <div > 
                        { answer.answer}
                      </div>
                    </div>
                    )}
                  </div>
                  </>    
                )
              } 
            }
  
           
            )
           }
  
          
        
        </div>
      </>
    );
  } else if(count >= 3 && result < 2 ){
    return(
      <>
        <h3 style={{fontWeight:'bold'}} > 
            Résultat : {result}/3
        </h3>

        <h3 style={{fontWeight:'bold'}} > 
          {error}
        </h3>
       
      </>
    )
  }

  else if(count >= 3 && result >= 2 ){
    return(
      <>
        <h3 style={{fontWeight:'bold'}} > 
            Résultat : {result}/3
        </h3>

        <h3 style={{fontWeight:'bold'}} > 
          {error}
        </h3>
      </>
    )
  }

 
}

export default Quizz;