import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Counter from "./components/Counter"
import ServicesComponents from "./components/ServicesComponent"
import Footer from "./components/Footer"
import Form from "./Form"
function App() {
  return (
    <>
    <NavBar/>
    <main>
      <Hero></Hero>
      <Counter/>
      <ServicesComponents/>
      <Form></Form>
      <Footer/>

    </main>
    </>
  ); 
}

export default App;
