import Middleware from '../src/middleware';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('Middleware', () => {
    const fn1 = spy();
    const fn2 = spy();
    const allMiddlewares = [fn1, fn2];
    
    it('should register a middleware', () => {
        Middleware.register(fn1);
        expect(Middleware.__middlewares[0]).to.be.equal(fn1);
    });
    
    it('should register a another middleware', () => {
        Middleware.register(fn2);
        expect(Middleware.__middlewares[1]).to.be.equal(fn2);
    });
    
    it('should get all middlewares registered', () => {
        expect(Middleware.getAll()).to.deep.equal(allMiddlewares);
    })
    
    it('should to run the middlewares', () => {
        let x = 1, y = 2;
        
        Middleware.execAll({x,y});
        expect(fn1).to.be.calledOnce;
        expect(fn2).to.be.calledOnce;
    })
})