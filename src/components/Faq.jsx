
function Faq({question, response}) {
    
  return (
    <li>
        <div>
          <h2>{question}</h2>
          <img src="" alt="" />
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
