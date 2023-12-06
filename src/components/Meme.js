import React from "react"
import "./meme.css"
import memesData from "../memesData"

export default function Meme () {
    // const [memeImage, setMemeImage] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    let url;
    let name;

    function getMemeImage(event) {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        name = memesArray[randomNumber].name;
        setTitle(name)
    }
    // function getMemeImage() {
    //     const memesArray = memesData.data.memes;
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     url = memesArray[randomNumber].url;
    //     setMemeImage(url)
    //     name = memesArray[randomNumber].name;
    //     setTitle(name)
    // }

    function handlerInput (event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  return (
    <main>
        <div className="container">
            <div className="form">
                <div className="input-box">
                    <input type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handlerInput} />
                    <input type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handlerInput} />
                </div>
                <button onClick={getMemeImage}>Get a new meme image  <i className="fa-regular fa-image"></i></button>
            </div>
            <div className="image-box">
                <img src={meme.randomImage} alt={title}/>
                <h2>{meme.topText}</h2>
                <h2>{meme.bottomText}</h2>
            </div>
        </div>
    </main>
  )
}

// document.querySelector("button").addEventListener("click", function() {
//     console.log("hello");
// })
