import '@testing-library/jest-dom/extend-expect';

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Disable } from './';

describe('Disabled', () => {
  it('disable children events when disabled prop is true', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Disable disabled>
        <button onClick={handleClick} data-testid="button" />
      </Disable>
    );

    fireEvent.click(getByTestId('button'));

    expect(handleClick).not.toBeCalled();
  });
});
