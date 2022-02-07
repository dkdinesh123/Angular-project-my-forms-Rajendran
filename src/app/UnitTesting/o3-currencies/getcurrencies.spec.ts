
import { getcurrencies} from "./getcurrencies"

describe('getcurrencies',() =>{


    it('should return the supported currencies',()=>{
        const result = getcurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('EUR');
        expect(result).toContain('JPY');
       
    })
})