import Head from './header/header';
import Content from './content/content';

function App() {
  return (
    <section id="exchange">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <h5 className="title">Exchange</h5>
            <div className="application">
              <Head />
              <Content />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
