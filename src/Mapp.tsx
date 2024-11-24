import { PlacesProvider } from "./context"
import {Homepage} from "./pages"

const Mapp = () => {
  return (
    <PlacesProvider>
        <h1>Localizacion del usuario</h1>
        <Homepage/>
    </PlacesProvider>
  )
}

export default Mapp