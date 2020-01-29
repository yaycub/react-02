import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="adjective" name="0" onChange={onChange} />
    <input type="text" placeholder="noun" name="1" onChange={onChange} />
    <input type="text" placeholder="verb, past tense" name="2" onChange={onChange} />
    <input type="text" placeholder="adverb" name="3" onChange={onChange} />
    <input type="text" placeholder="adjective" name="4" onChange={onChange} />
    <input type="text" placeholder="noun" name="5" onChange={onChange} />
    <input type="text" placeholder="noun" name="6" onChange={onChange} />
    <input type="text" placeholder="adjective" name="7" onChange={onChange} />
    <input type="text" placeholder="verb" name="8" onChange={onChange} />
    <input type="text" placeholder="adverb" name="9" onChange={onChange} />
    <input type="text" placeholder="verb, past tense" name="10" onChange={onChange} />
    <input type="text" placeholder="adjective" name="11" onChange={onChange} />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
