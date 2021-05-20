import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsArticle from './NewsArticles';
import dotenv from 'dotenv';

dotenv.config();


describe('News Container', () => {
  it('displays search results', async () => {
    render(<NewsArticle />)

    screen.getByText(`Hold up, I'm getting it.`)

    const unorderedList = await screen.findByRole('list', { name: 'articles'});
    expect(unorderedList).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Type a keyword');
    userEvent.type(input, 'Apple');

    const submit = await screen.findByRole('button', {
      name: 'search-articles'
    })
    userEvent.click(submit);

    return waitFor(() => {
      const article = screen.getAllByTitle('Header');
      expect(article).toHaveLength(5);
    })
  })
})