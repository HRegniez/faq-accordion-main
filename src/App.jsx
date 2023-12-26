import './style.sass'
import faqData from './data.json'
import Faq from './components/Faq'

function App() {
  console.log(faqData)

  return (
    <main>
      <section>

        <div className="title">
          <img src="./images/icon-star.svg" alt="star icon" />
          <h1>FAQs</h1>
        </div>

        <ul>
          {
            faqData.map((faq, index) =>  (
              <Faq key={index} question={faq.question} response={faq.response}/>
            ))
          }
        </ul>
        
      </section>
    </main>
  )
}

export default App
