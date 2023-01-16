import React from "react";
import '../css/styles.css'
import { saveAs } from 'file-saver'

const ContentSection = () => {

    const [memeData, setMemeData] = React.useState({
        topText: " ",
        bottomText: " ",
        memeUrl: ""
    })

    const [allMemeData, setAllMemeData] = React.useState([])

    const getData = () => {
        const getData = async () => {
        const memes = await fetch(
            `https://api.imgflip.com/get_memes`
        )
        let memesJson = await memes.json()
        setAllMemeData(memesJson.data.memes)
        }
        getData()
    }
    React.useEffect(() => {
        getData() 
    }, [])

    console.log(allMemeData)

    const getMemeData = () => {
        const randomNumber = Math.floor(Math.random() * allMemeData.length)
        const newMemeUrl = allMemeData[randomNumber].url
        console.log(newMemeUrl);
        setMemeData((prevArray) => (
            {
                ...prevArray,
                memeUrl: newMemeUrl
            }
        ))
        console.log(memeData.memeUrl);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMemeData((prevMemeData) => {
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }

    return (
        <div className="input-section">
            <div className="input">
                <div className="container c1">

                    <input
                        name="topText"
                        type="text"
                        onChange={handleChange}
                        value={memeData.topText} />

                    <label>top text</label>
                    <i></i>
                </div>
                <div className="container c2">

                    <input
                        name="bottomText"
                        type="text"
                        onChange={handleChange}
                        value={memeData.bottomText} />

                    <label>bottom text</label>
                    <i></i>
                </div>
            </div>
            <div className="button">
                <button formnovalidate onClick={getMemeData} alt="Generate Meme">
                    <i>G</i>
                    <i>e</i>
                    <i>n</i>
                    <i>e</i>
                    <i>r</i>
                    <i>a</i>
                    <i>t</i>
                    <i>e</i>
                    <i>&nbsp;</i>
                    <i>M</i>
                    <i>e</i>
                    <i>m</i>
                    <i>e</i>
                </button>
            </div>
            {memeData.memeUrl && <div className="meme-area">
                <img src={memeData.memeUrl} alt="" />
                <p className="top-text">{memeData.topText}</p>
                <p className="bottom-text">{memeData.bottomText}</p>
            </div>}

        </div>
    )
}

export default ContentSection