import { greet } from "./greet"

describe('greet',()=>
{
    it('should  display with hello and !. string',()=>{
        expect(greet('Tom')).toBe('hello Tom!.');
    })
    it('Should include the name in the message',()=>{
        expect(greet('Dinesh')).toContain('Dinesh');
        
    });
})