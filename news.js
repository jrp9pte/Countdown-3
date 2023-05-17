import react, {useEffect, useState } from 'react'
import '../App.css' ; 
function News(){

    const urlNews = new URL("https://api.nytimes.com/svc/topstories/v2/home.json")
    const newsAPIKey = process.env.REACT_APP_API_key_news
    urlNews.searchParams.append("api-key",  newsAPIKey)
    // console.log("%s news url", urlNews);

    const [newsData, setNewsData] = useState([])
    // console.log("%s" , urlNews)
    useEffect(() => {
        fetch( urlNews )
        .then( (response) => response.json() )
        .then( (data) => { setNewsData(data)} )
        .catch((error) => console.log("There is an Error: ", error))

    }, [])

    // console.log(newsData.results)
    if( newsData.length !== 0 ){

    return <>

        
        <div className='news'> 
            < div id = "title">  News Articles </div>
            { newsData.results.map((x) => (
                <div className='Articles'>
                    <div > 
                        <a className='title' href= {x.url} > {x.title}   </a>
                            <div id = "Author">
                                {x.byline}
                            </div>
                        {/* <div>{x.multimedia}</div> */}
                        <img  id= "image" src = {x.multimedia[0].url} /> 
                    </div>
                    <div className='abstract '>{x.abstract}</div>

                

                </div> 
            )
            
            )}


        </div>
    </>
    }

}

export default News