import React from 'react';
import HomePage from './HomePage';
import Navbar from './Nav/Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // isLoading: true
    };
  }

  // componentDidMount() {
  //   fetch('/api/health-check')
  //     .then(res => res.json())
  //     .then(data => this.setState({ message: data.message || data.error }))
  //     .catch(err => this.setState({ message: err.message }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  render() {
    // return this.state.isLoading
    //   ? <h1>Testing connections...</h1>
    //   : <h1>{this.state.message}</h1>;
    return (
      <div className="App">
        <Navbar />
        <HomePage />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam nisi, sit dolores ex magni voluptatum possimus a. Eos qui molestiae ipsum aliquam repellendus accusantium quia deserunt sapiente doloremque quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias unde dolorum porro accusamus, maxime eveniet beatae voluptatem rerum eos totam facilis quos, delectus perspiciatis, accusantium nihil obcaecati impedit quam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias saepe repellat fuga? Ipsa vitae, quae asperiores enim nesciunt saepe doloribus hic eum culpa molestias, similique assumenda ipsam sapiente corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sunt excepturi, accusantium voluptatem ea ducimus tempore soluta consectetur commodi. Accusamus rem laborum reiciendis deserunt libero illum unde laudantium odit iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore blanditiis illo officia maxime, nemo maiores quidem laboriosam, facere excepturi, magnam ipsam quisquam placeat id eius at reprehenderit beatae? Recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam quaerat quia sint totam eos odio laboriosam iure saepe, nemo officiis fuga suscipit, vitae rerum. Pariatur molestiae facere sint quibusdam?
      </div>
    );
  }
}
