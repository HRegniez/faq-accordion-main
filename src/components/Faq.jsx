import { useState } from "react"
function Faq({question, response}) {
    const [faqState, setFaqState] = useState(false)
    
  return (
    <li>
        <div className="faq_question" onClick={() => setFaqState(!faqState)}>
          <h2>{question}</h2>
          <img src={!faqState ? "../images/icon-plus.svg" : "../images/icon-minus.svg"} alt="more info icon" />
        </div>
        <div className={`faq_response ${!faqState ? "" : "open"}`}>
          <p>
            {response}
          </p>
        </div>
    </li>
  )
}

export default Faq
