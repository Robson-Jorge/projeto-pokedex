import { useState } from "react";
import GoogleFontLoader from 'react-google-font-loader'

import Header from "./components/page-header"
import Main from "./components/page-main";

function App () {

  const [ valueSearch, setValueSearch] = useState("")

  const setValue = (newValue) => {
    setValueSearch(newValue);
  };

  return (
    <>      
      <GoogleFontLoader
        fonts={[
          {
            font: 'Acme',
            weights: [400, '400i'],
          },
          {
            font: 'Roboto',
            weights: [400, '400i'],
          },
          {
            font: 'Gloock',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <Header setValue={setValue}/>
      <Main filterPoke={valueSearch}/>
    </>
  )
}

export default App;