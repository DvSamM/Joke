import React, { useEffect, useState } from "react";

const Landing = () => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);

  const getJoke = () => {
    setIsLoading(true);
    let url = "https://v2.jokeapi.dev/joke/Any";

    fetch(url)
      .then((response) => response.json())
      .then((newResponse) => {
        setData(newResponse);
        console.log(newResponse);
        
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setIsLoading(false);
      });
  };
   useEffect(() => {
      setIsLoading(true);
  
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);
  

  return (
    <div>
      <div className="container">
      <h1>Here's Your Joke App........Explore</h1>
      <button onClick={getJoke}>Get a Joke</button>
      </div>

      
         {isLoading ? (
          /* From Uiverse.io by Nawsome */
          <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
          </div>
        ) : (

        
            <div>
              
              <div className="type" id="type">Type; {data.category}</div>
              <div className="joke" id="joke"> 
              
                {data.type === "single" ? (
                  <p>{data.joke}</p>
                ) : (
                  <div>
                    <p>{data.setup}</p>
                    <p>{data.delivery}</p>
                  </div>
                )}
              </div>
            </div>
          
        )}
      

    </div>
  );

};


export default Landing;