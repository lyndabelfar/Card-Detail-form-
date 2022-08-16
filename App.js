import {useState} from 'react'

function App() {
  const [name, setName ]= useState('')
  const [month, setMonth]= useState(0)
  const [day, setDay]= useState(0)
  const [cardNum, setCardNum]= useState('')
  const [cvc, setCvc]= useState('')
  const [confirmed, setConfirmed] = useState(false)




  const handleSubmit =(e)=>{
    console.log(e)
    e.preventDefault()
  }

  

  return (
    <div className='container'>
      <div className="left">
        <div className="main-card">
          <div className="logo"></div>
          <div className="more-data">
            <div className="card-num">{cardNum}</div>
            <div className="bottom-data">
              <div className="person-name">{name}</div>
              <div className="date">{month}/{day}</div>
            </div>
          </div>

        </div>
        <div className="back-card">
          <div className="cvc">{cvc}</div>
        </div>
      </div>
      <div className="right">
        
        <form onSubmit={handleSubmit}>
          <label>CARDHOLDER NAME</label>
          <input type="text" className={`name-input `} value={name} onChange={(e)=> setName(e.target.value)} placeholder="e.g. John Smith" />
          <label>CARD NUMBER</label>
          <input type="text"
          className='card-number-input' 
          placeholder='e.g. 0594 2552 2552 1565' 
          value={cardNum} 
          onChange={(e)=> setCardNum(e.target.value)}

          />

          <div className="more-data-div">
            <input type="number"
            className='month-input' 
            min='0' 
            max='12' 
            placeholder='MM'
            value={month} 
            onChange={(e)=> setMonth(e.target.value)} 
            />
            <input type="number" 
            className='day-input' 
            min='01' 
            max='31' 
            placeholder='DD'
            onChange={(e)=> setDay(e.target.value)} 
            />
            <input type="number" 
            className='cvc-input' 
            placeholder='e.g. 123'
            value={cvc} 
            onChange={(e)=> setCvc(e.target.value)} 
            />
          </div>
          <button type="submit" className="confirm-btn">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;
