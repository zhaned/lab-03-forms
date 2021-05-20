import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <div>
    <h3 title='Header'>{title}</h3>
    <h5>{author}</h5>
    <p>{description}</p>
  </div>
)

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Article;