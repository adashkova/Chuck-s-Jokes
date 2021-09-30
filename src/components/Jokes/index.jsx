import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getJokes } from '../../actions/jokes';
import { connect } from 'react-redux';
import Joke from '../Joke';
import Spinner from '../Spinner';

const Jokes = ({ getJokes, jokes }) => {
  useEffect(() => {
    getJokes();
  }, [getJokes]);

  if (jokes.error !== undefined) {
    return <h1>{jokes.error}</h1>;
  }

  if (jokes.loading) {
    return <Spinner />;
  }

  return (
    <>
      {jokes.jokes.map(joke => {
        return <Joke key={joke} joke={joke} />;
      })}
    </>
  );
};

Jokes.propTypes = {
  jokes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  jokes: state.jokes,
});

export default connect(mapStateToProps, { getJokes })(Jokes);
