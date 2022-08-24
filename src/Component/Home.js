import {useState} from 'react';
import './css/Home.css'
import image from './img/image.jpeg'

function Home() {

    return ( <> <div className='homediv'>
        <div className='homedivLeft'>
            <img src={image} alt="main image"/>

        </div>
        <div className='homedivRight'>
            <h1>Muhamad ali</h1>
            <h3>You can call me mandela !:-: </h3>
            <h5>
                <i>Pre-final year student at NIT rourkela</i>
            </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.</p>
            <div className='btns'>
                <button className='a'>Donload resume</button>
                <button className=''>Email me</button>
            </div>
        </div>
    </div>
    {/* error */}
    
  
    <div className='techstackd'>
    <h1>technology</h1>
    <div className='techstack'>
      <div className='card'>
      <img src={image} alt="main image"/>
      <p>        hello khei ksfigfi iufgiwehello khei ksfigfi iufgiwehello khei ksfigfi iufgiwe
</p>
      </div></div>
    
    </div>
    

    
     </>)
}

export default Home