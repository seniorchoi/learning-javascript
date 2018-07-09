import React, {Component} from 'react';

class AdComponent extends Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render () {
    return (
      <ins className='adsbygoogle'
           style={{ display: 'block' }}
           data-ad-client='ca-pub-5272463153211560'
           data-ad-slot='5272463153211560'
           data-ad-format='auto' />
    );
  }
}

export default AdComponent;
