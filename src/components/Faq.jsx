
function Faq({question, response}) {
    
  return (
    <li>
        <div className="faq_question">
          <h2>{question}</h2>
          <img src="../images/icon-plus.svg" alt="more info icon" />
        </div>
        <div>
          <p>
            {response}
          </p>
        </div>
    </li>
  )
}

export default Faq
