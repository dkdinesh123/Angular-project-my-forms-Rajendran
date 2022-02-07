import { VoterComponent } from "./voter.component"


describe('VoterComponent', ()=>{
    let component:VoterComponent;
    beforeEach(()=>{
        component = new VoterComponent();
    })
    it('Should be Create the Instance',()=>
    {
        expect(component).toBeTruthy();
    });
    
    it('Should increment total Votes for UpVoted.',()=>
    {
        component.upVote();
        expect(component.totalVotes).toBe(1);
    });
   
    it('Should decrement total Votes for downVoted.',()=>
    {   
        component.downVote();
        expect(component.totalVotes).toBe(-1);

    });
    
})