import React from 'react'
import Playlist from '../img/elearning.png'
import '../CSS/Home_template.css'
import { Link } from 'react-router-dom'
import Musica from '../img/musica.png'
import Live from '../img/instagram-live.png'
import '../CSS/formationgratuite.css'


export default function () {
  return (
    
    <div className='contain_formationgratuite'>


        <div className='contain_coursgrat_header'>
          
                <div className='contain_nav_confirme'> 
                      <Link style={{textDecoration:'none', width:'15%' }}  to='/' className='start' >
                          Retour
                      </Link>
              
                  </div>  

                  <p style={{color:'white'}}> Démarrer un cours </p>  
      
                  <div className='contain_img_confirm'>
                      <img  src={Playlist} className='img_confirm'/>
                  </div>  
    
          
        </div>
      
       
        <div className='contain_home_template_one'>
            
            <div className='contain_home_img'>
              <img  src='data:image/jpeg;base64,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' className='home_img'/>
            </div>
              
            <div className='contain_desc'>
                
                <h4 className=''>
                Formation certifiée Développement fullstack
                </h4>
                <h5 className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquet nisi, consequat aliquam diam. 
                    Praesent ipsum urna, varius ac eros sit amet, iaculis facilisis libero. 
                    Aliquam a ultricies lorem. Fusce volutpat sem at porta iaculis. Morbi non hendrerit lorem. 
                    Phasellus quis sem sodales turpis tempor lobortis. Nullam vestibulum felis diam, eu ornare dui interdum vel. Fusce ac hendrerit justo. 
                    Mauris dictum vehicula blandit. Sed scelerisque elit in lectus porttitor, eu vulputate purus mattis. Cras at nibh nec augue euismod lobortis. 
                    Maecenas varius magna a nulla facilisis egestas. 
                    Vestibulum at enim faucibus, iaculis tortor a, tincidunt tellus. Nam sem felis, facilisis eu diam eu, imperdiet tempus justo. Donec a neque ligula. 
                </h5>
                <ul className=''>
                  <li className=''>
                    Sécurité renforcée
                  </li>
                   <li className=''>
                    Architecture seduisante
                  </li>
                  <li className=''>
                    Durée :12mois
                  </li>
                </ul>


                <Link style={{textDecoration:'none', }} to='/appercu' className='start'>
                   Commencer 
                </Link>


            </div>
            
        </div>



        <div className='separator'>
        
        </div>



        <div className='contain_home_template_one'>
          
          <div className='contain_home_img'>
            
            <img  src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAq1BMVEX////oAAD57u/oHx/zz878///qDRDumJgAabgAZ7f78fHrYF/qXVz1zMvqGx7qZWf79vTq8vfV5O71+vvqOTvE1+V7qNIAYbXi7PS/1OcAZLYAbLjsjo7wjY30xsfobnDztbbpNDT1393teHfqT1Dwp6Xx1db0wL/qVlfrgH/oKCzsnZ/pPkLshYj45+dklcyjwd1qnswyf8CPtNkLdL1LjsYAV7GwzeZGiMbQI/YHAAADZElEQVRYhe2X2XajOhBFpRCJwbEYZCY77dnGU5hj+P8v6xIkbpzYae6C+9LL5wEckDanSqrSCkIPPfT/ifQFmvYFetV6Av3qy9Js3hMI9+QowD3laKH3giEzvOyFs8Kv1b0jhw/woGZ0I4Unuq5+LDfbLpyA0RdCEBnu3owuHBnTPUS0XB862SF7ijdwO2K9U37IitJ5tWr7bnkOMPuFRHg70mnFyElawC3E9LmTH/REmQy3DZM6FprBqKj5N+mOo/bR6jiA65FJN9dsO9DbOt3iPVyX+ABr9x31jOlTW0tvVHxzJh3wjSnPVGoNImthyZAO0v4nELm6ijv5GoAhDcUUdljfCE2Anjb6gi1WISL6bi6e7ncbFMovh6+jjZMmGhtb3XF0xLvZbMGYgVZ0IJ6OcACV8PJ9vCa2kozDOyBNJNFY0A0KKNPE3oOh4XWf4BavSAZBtWtQ4UQxaYJqzaiMNEZhs0zx6ApC/CQpzM8/nj/PIk6QmarWFYiE260OIKSzGZzItK7vOgKe5anZwNZOzdohn+QNEJmPMMaSqKU5OxhoLWyR4wJXQxJXyTPb8jjnpmdZdhFnSZkmXg2IXO8PSMbraahVjjRMhxAffHWG9Y+ismLnPVVc93x2gZlGTux7F3+lyz9BGkzUPnKE0Im9BlQXpbC42ix3atIaJ5fQtCUWDlDlCB3pbiWqc0pPzbmeeYMC+DytDaFh5YjJRriv+82SHqoGtsTS/M8GyM5NEPHs+oeZv39w4MOQXBlSjU/H6gQlI4oFEK3g2WVqMh6XkZNlcZY5UaqMz6nIUlH6lxEbNoIItrI8JUZQHenbIBBOCBnKx0YunHSijoXUSRpltkkQL6yGyRO7Ucm3RUxPyLyVdm0gImsn/tPLAK9b9kczvVQV4p737X3rk8U/K3kZJY6TRGWuqo719yl3ZL9PXFVVQOp48h5/9/RXeXEWV9/ndpw5sAUKq5GuHzPXlBWVP0bhtCQVrpLdP/lMP/HvvvwCyhVXLbPC9kzOKyIh3IRu4kNHKBMfHlm3q/CriAdTynzsjieTvNZEcRXY3EWVbyuJW3r6kOhptu37NnS4z73tFUke/bd9YAEBAKZoklAoth9nUZqXjt960S4yLb8QpV8JuoBvmRWkt38BH3rooX9TvwHGxkk4lQI/+AAAAABJRU5ErkJggg=='} className='home_img'/>
          </div>
         
            <div className='contain_desc'>
               <h4 className=''>
                  Formation certifiée Developpement fullstack mobile
                </h4>
                <h5 className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquet nisi, consequat aliquam diam. 
                    Praesent ipsum urna, varius ac eros sit amet, iaculis facilisis libero. 
                    Aliquam a ultricies lorem. Fusce volutpat sem at porta iaculis. Morbi non hendrerit lorem. 
                    Phasellus quis sem sodales turpis tempor lobortis. Nullam vestibulum felis diam, eu ornare dui interdum vel. Fusce ac hendrerit justo. 
                    Mauris dictum vehicula blandit. Sed scelerisque elit in lectus porttitor, eu vulputate purus mattis. Cras at nibh nec augue euismod lobortis. 
                    Maecenas varius magna a nulla facilisis egestas. 
                    Vestibulum at enim faucibus, iaculis tortor a, tincidunt tellus. Nam sem felis, facilisis eu diam eu, imperdiet tempus justo. Donec a neque ligula.    
                </h5>
                <ul className=''>
                  <li className=''>
                    Sécurité renforcée
                  </li>
                   <li className=''>
                    Architecture seduisante
                  </li>
                  <li className=''>
                    Durée :12mois
                  </li>
                </ul>

                <Link style={{textDecoration:'none', }} to='/appercu' className='start'>
                   Commencer 
                </Link>

            </div>

        
            

        </div>



        <div className='separator'>
        
        </div>


        <div className='contain_home_template_one'>
        
          <div className='contain_home_img'>
            
            <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA/CAMAAADt7Ke5AAAAVFBMVEX///8En9kAnNgAmdeUyel4vuUAlta12/BZtOHT5/VEqt0AlNXC4fMtp9z7/f7m9Pvw+v2m0uzd7vit1+5pueNNr9+HxOfJ5PSazusnotqOyunW7PcGiOHuAAAEBElEQVRYhe1Z2dajIAwupEWq4o5Lff/3HPZNtP/0Yi7mb07PqYbEL8SQBLzdrqhgW38pcEb9xoqPFBU9CUKk/kCxlorPj3HvGCH8+EDxIRXvX9wv7q/Fbbtz3Ka9UmzOcbsrRfXkEsh6hjsSYF1OSz6ZARnPcFcCZZPTcjSDSDRDHrcVY3g6UZyEKLhZxbiDyF4wX+JSqe4ya4z7FLioPFEsxRi4zBjjFtJg+sX9Vbgdr5gL4L/BbVnF/LL8C9yBVbyTCwCjT3A3obh9givwxHIU8qhydv8ct6ukoksjP8dtpSJSuOSf4pIv7i/AZZG6KiuuY45xd6nO7d1N4bo7LhX3PG4dFTJlMBNFFRNfYvcKA3OlMqm/HHDlu/hZKPriVgtFb1OM2zCh6Gy6TUJRlOplDncUw733FTrtN8Z5D0SLSHGffdlP637T34dAtJiX2yX9hr4upFWqXzcoeZql4vpe7oRagnH1ybbuWWFM3vWQF7RT/iYETmjhdH8v9aUvfel/oXbp177YbU1uhlbQYfyZpqOhEOwl4Q51hpmlhWMA8QMwda2uxLVvlFtqx8PE3c0INDvcUPRMM/HbrNdxgpEmMCeEslsQ/YE1C+x4VJgdF3kL9w0sExN6ue8ekNPP4+rmKMV9eK7HrQEFhNGFszsLizHO4z6UAIhOpapcx3QHr+Vwd2KZ5n87nzFVMhjKaeKoyuA2mxRgstQ0i2219kr7B9GJloCNpEXlkqcuz44ojImYq16oqesjbievITmh1daC7sta02X0ygfwkquipeqGDLc8ySb2uFE94CaGD8paSB6qXWAbP/V6zjom7UScvobIz0yJsD4IEjUzSJqaAWKgLQ71iFole2inorh66RACwl0Pq72UnGvJLULoWNmpBedMEe3K8DFlx+t3s+EJpYEqcTge4fh7eXIf7CcyuIfPAjFux22KwIanXJ/i3pUT/L0KgpOTf/1ODt1njCvuKRhn69BV4ZwuTvXSiWcqv6exZ6eCcpYfcIVgz7CPk1m5NEnAi8Lx32L0Wjs53CxRztFH3JsJJj0fnQ8TgUZnKwukzAj2kjGNEAF3F7jqQZXC1ZkJUyPeBoZhc9BUQ3ZGzkgdMcDH517ft/WI29iI1H7T16t6Kkavel9GapiDZuJHUY/U5O8TWP25Sa0RIKJsZvJzVwF/zDOFKP/oty3UhJY70jIrXZZkPUwuavA9KGhZXCyLjikxLi20QfX0ScnO0hC5/ODXu7J/husf5DNMyzyGT4ZhVcbkkI9iGqjxC7YG1mJTaPucjui5Cg6LksCKjBYOksXCQIkLafq+xRr6qdwYf4wmQIfXKkhfN/08cbYx+kpTT1PPYqCcXtFbfL6oZPbHhPEHw8Aw9uotNioAAAAASUVORK5CYII='} className='home_img'/>
          </div>
         
           <div className='contain_desc'>
                
                <h4 className=''>
                   Formation certifiée CISCO
                </h4>
                <h5 className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquet nisi, consequat aliquam diam. 
                    Praesent ipsum urna, varius ac eros sit amet, iaculis facilisis libero. 
                    Aliquam a ultricies lorem. Fusce volutpat sem at porta iaculis. Morbi non hendrerit lorem. 
                    Phasellus quis sem sodales turpis tempor lobortis. Nullam vestibulum felis diam, eu ornare dui interdum vel. Fusce ac hendrerit justo. 
                    Mauris dictum vehicula blandit. Sed scelerisque elit in lectus porttitor, eu vulputate purus mattis. Cras at nibh nec augue euismod lobortis. 
                    Maecenas varius magna a nulla facilisis egestas. 
                    Vestibulum at enim faucibus, iaculis tortor a, tincidunt tellus. Nam sem felis, facilisis eu diam eu, imperdiet tempus justo. Donec a neque ligula. 
                </h5>
                <ul className=''>
                  <li className=''>
                    Sécurité renforcée
                  </li>
                   <li className=''>
                    Architecture seduisante
                  </li>
                  <li className=''>
                    Durée :12mois
                  </li>
                </ul>



                <Link style={{textDecoration:'none', }} to='/appercu' className='start'>
                   Commencer 
                </Link>

            </div>
 
        </div>



        <div className='separator'>
        
        </div>



        <div className='contain_home_template_one'>
        
          <div className='contain_home_img'>
            
            <img src={'data:image/png;base64,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'} className='home_img'/>
          </div>
         
           <div className='contain_desc'>
                
                <h4 className=''>
                   Formation certifiée en gestion de projet
                </h4>
                <h5 className=''>
                   Parcourez de long en large Le developpement d'intelligence artificiel avec python et son framework TensorFlow
                   TensorFlow est un outil open source d'apprentissage automatique développé par Google. 
                   Le code source a été ouvert le 9 novembre 2015 par Google et publié sous licence Apache. 
                   Il est fondé sur l'infrastructure DistBelief, initiée par Google en 2011, et est doté d'une interface pour Python, Julia et R Wikipédia
                    Date de sortie initiale : 9 novembre 2015
                    Langages de programmation : Python, C++
                    Plates-formes : macOS, Microsoft Windows, Android, JavaScript
                    Dernière version : 2.12.0 (23 mars 2023)
                    Développé par : Google Brain
                    Licence : Licence Apache version 2.0
                    Système d'exploitation : Microsoft Windows, Linux, macOS, iOS et Android
                </h5>
                <ul className=''>
                  <li className=''>
                    Sécurité renforcée
                  </li>
                   <li className=''>
                    Architecture seduisante
                  </li>
                  <li className=''>
                    Durée :12mois
                  </li>
                </ul>


                <Link style={{textDecoration:'none', }} to='/appercu' className='start'>
                   Commencer 
                </Link>


            </div>
 
        </div>

    </div>
  )
}
