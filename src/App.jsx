import { useState } from 'react'
import './style.sass'
import faqData from './data.json'


function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <main>
      <section>

        <div className="title">
          <img src="./images/icon-star.svg" alt="star icon" />
          <h1>FAQs</h1>
        </div>

        <ul className='faq'>
          {
            faqData.map((faq, index) =>  (
              <li key={index}>
                <div className="faq_question" onClick={() => toggle(index)}>
                  <h2>{faq.question}</h2>
                  <img src={ selected === index ? "../images/icon-plus.svg" : "../images/icon-minus.svg"} alt="more info icon" />
                </div>
                <div className={`faq_response ${ selected === index ? "open" : ""}`}>
                  <p>
                    {faq.response}
                  </p>
                </div>
            </li>
            ))
          }
        </ul>
        
      </section>
    </main>
  )
}

export default App
