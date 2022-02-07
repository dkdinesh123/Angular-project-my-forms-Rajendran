import {compute} from "./compute"

describe('compute',()=>{
it('should return zero if input as negative',()=>{
    const result = compute(-10);
    expect(result).toBe(0);
})
it('should return 25 if input as 20',()=>{
    const result = compute(20);
    expect(result).toBe(25);
})
});