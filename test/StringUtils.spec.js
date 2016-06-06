import { parseToCammelCase, turnToDispatchName } from '../src/StringUtils';
import { expect } from 'chai';

describe('String Utils', () => {
    describe('Parse to Cammel Case', () => {
        it('should parse EXAMPLE to example', () => {
            expect(parseToCammelCase('EXAMPLE')).to.be.equal('example')
        })

        it('should parse EXAMPLE_TOTAL to exampleTotal', () => {
            expect(parseToCammelCase('EXAMPLE_TOTAL')).to.be.equal('exampleTotal')
        })
    });
    
    describe('Turn to Dispatch Name', () => {
        it('should parse example to EXAMPLE', () => {
            expect(turnToDispatchName('example')).to.be.equal('EXAMPLE')
        })

        it('should parse exampleTotal to EXAMPLE_TOTAL', () => {
            expect(turnToDispatchName('exampleTotal')).to.be.equal('EXAMPLE_TOTAL')
        })
    });
})