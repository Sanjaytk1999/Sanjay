import "bulma/css/bulma.css"
import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.png"
import cortana from"./images/cortana.png"
import siri from "./images/siri.png"

console.log(Alexa)
console.log(cortana)
console.log(siri)
function App()
{
    return (<div>

   <section className="hero is-primary">
    <div className="hero-body">
        <p className="title">Personal Assistance App</p>
        <p className="subtitle">This is user friendly</p>
    </div>
   </section>
       
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                    <ProfileCard  
                    title="Alexa"
                     handle="alexa@99" 
                     img={Alexa} 
                  description="alexa was created by amazon and you can search what you want"/>
                    </div>
                    <div className="column is-3">
                    <ProfileCard 
                    title="cortan" 
                    handle="cor@99" 
                    img={cortana}
                    description="cortona was made by microsoft,who knows what it does"/>
                        </div>
                    <div className="column is-3">
                    <ProfileCard 
                    title="siri"
                     handle="siri@99" 
                     img={siri}
                     description="this is no more a app"/>  
                        </div>   
                </div>
            </section>
        </div>
    
       
    </div>

    
)}
export default App;