import { reverseString } from '../reverse.js';

describe (('Reverse string'), () => {
    it (('expand the incoming string'), () => {
        expect(reverseString('qwe-rty')).toBe('ytr-ewq');
    });
    it (('expand the incoming string'), () => {
        expect(reverseString(123)).toBe('321');
    });
    it (('expand the incoming string'), () => {
        expect(reverseString('1qaz')).toBe('zaq1');
    });
});