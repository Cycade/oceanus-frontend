import react, { Component } from 'react';
import Head from 'next/head';
import App from '../components/App.js';
import Banner from '../components/layout/Banner.js';
import Layout from '../components/layout/Layout.js';
import BGStory from '../components/info/BGStory.js';
import Login from '../components/auth/Login.js';

class Home extends Component {
  constructor() {
    super();
  }

  componentDidAmount() {

  }

  render() {
    return (
      <div>
        <Head>
          <title>Possum Nest</title>

          {/* import bootstrap and font-awesome */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </Head>

        <Login>
          <Banner />
          <BGStory />
        </Login>
      </div>
    );
  }
}

export default Home;