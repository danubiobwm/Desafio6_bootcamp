import React from 'react';
import PropTypes from 'prop-types';

import {Broswer} from './styles';

export default function Repository({navigation}) {
  const repository = navigation.getParam('repository');

  return <Broswer source={{uri: repository.html_url}} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('repository').name,
});
