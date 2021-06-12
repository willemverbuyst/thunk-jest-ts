import { showMessageWithTimeout } from '../action-creators';
import { setMessage } from '../actions';

describe('#showMessageWithTimeout', () => {
  it('sets and clears the message', async () => {
    const dispatch = jest.fn();
    const text = 'test';
    const timeOutMilliSeconds = 2000;

    showMessageWithTimeout(dispatch, text, timeOutMilliSeconds);

    expect(dispatch).toHaveBeenCalledWith(setMessage(text));
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
