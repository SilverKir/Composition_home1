import { Card } from './components/Card'
import { Image } from './components/Image'

import './App.css'


function App() {
  return (
    <>
      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardButton={{
          href: "#",
          className: "primary",
          buttonName: "Go somewhere"
        }}
      >
        <Image src="https://picsum.photos/200/300" alt="random image" />

      </Card>

      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardButton={{
          href: "#",
          className: "primary",
          buttonName: "Go somewhere"
        }} />


    </>
  )
}

export default App
