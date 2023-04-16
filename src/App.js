import './App.css';
import { useState, useEffect } from "react"

function App() {
  const apiUrl = "https://api.quotable.io/random"
  const [quote, setQuote] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const generateQuote = () => {
    setIsLoading(true)
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setQuote(data)
        setIsLoading(false)
      })
  }

  const shareToWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${quote.content}  (${quote.author})`)
  }

  useEffect(() => {
    generateQuote()
  }, [])

  if (isLoading) {
    return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Best Quote Generator</h1>
      <div className="quote-wrapper">
        <p className='quote-content'> {quote.content}</p>
        <span className='quote-author'>{quote.author}</span>
      </div>
      <button className='generate-button' onClick={generateQuote}>Get Random Quote</button>
      <button className='whatsapp-button' onClick={shareToWhatsapp}>Share to Whatsapp</button>
    </div>
  );
}

export default App;
