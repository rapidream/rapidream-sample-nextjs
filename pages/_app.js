import '../styles/globals.css'
import Rapidream from '../.rapidream'

function MyApp({ Component, pageProps }) {
  return (
    <Rapidream>
      <Component {...pageProps} />
    </Rapidream>
  );
}

export default MyApp
