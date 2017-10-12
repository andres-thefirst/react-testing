import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action width unknown type', () => {
        let result = commentReducer(undefined, {});
        expect(result).to.be.instanceOf(Array);
        expect(result).to.be.empty;
    });

    it('handle action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'New Comment'};
        expect(commentReducer([], action)).to.eql(['New Comment']);
    });
});
