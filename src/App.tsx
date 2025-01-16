import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig9YTR9-bssO7PX4uCKjR4_0EB-SDhsoHjZYrAr-s6hTx4ryZt5cuSxA0p0F3AmlFz4cW7TliAZb5_XmRYs8rEc29xhdUDfRmJyCWTyNAQZOYB1HuoN3wPkFnQRowlqcYJqiaMeqjXJy8cUoij-HpEDbiJIlMIndQRaKF-wXpfXHn43cxmMQ6uh_k3bw/w1200-h630-p-k-no-nu/Batman_and_Batmobile_Animated-IS_03%20-%20Copia.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
