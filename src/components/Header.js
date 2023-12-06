import "./header.css"

export default function Header () {
  return (
    <header>
      <div className="container">
        <div className="left">
            <img src="images/troll-face.png" alt="vector" />
            <h2>Meme Generator</h2>
        </div>
        <div className="right">
            <h4>React Course - Project 3</h4>
        </div>
      </div>
    </header>
  )
}


