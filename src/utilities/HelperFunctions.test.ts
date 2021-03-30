import {isEmpty} from './HelperFunction';

describe('Helper Functions', ()=> {

    describe('isEmpty', ()=> {

        it('returns true if sting is empty', ()=> {

            expect(isEmpty('')).toBeTruthy();
        });
        it('returns false if sting is not empty', ()=> {

            expect(isEmpty('ff')).toBeFalsy();
        });

    })
})