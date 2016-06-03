import parseToCammelCase from '../../src/utils/parseToCammelCase';
import { expect } from 'chai';

describe('Parse To Cammel Case', () => {
    it('should be the same string that enter at method', () => {
        const method = 'EXAMPLE';
        const stringReturned = parseToCammelCase(method);
        
        expect(stringReturned).to.be.equal(method.toLowerCase());
    });
    
    it('should turn the name to cammel case', () => {
        const method = 'EXAMPLE_CONST';
        const stringReturned = parseToCammelCase(method);
        
        expect(stringReturned).to.be.equal('exampleConst');
    })
})