import { VoteComponent } from "./vote.component";


describe('VoteComponent',()=>{
    let component: VoteComponent;
    beforeEach(()=>{
        component = new VoteComponent();
    });
    it('Should Raise Vote-Changed Event When Upvotted',()=>{
        let totalVotes = 0;
        component.voteChanged.subscribe(tVotes=>{
            totalVotes = tVotes;
        });
        component.upVote();
        // expect(totalVotes).not.toBe(0);
        //  expect(totalVotes).toBe(3);
         expect(totalVotes).toBe(7);

    });
    it('Should Raise Vote-Changed Event When Down Votted',()=>{
        let totalVotes = 0;
        component.voteChanged.subscribe(tVotes1=>{
            totalVotes = tVotes1;
        });
        component.downVote();
        //  expect(totalVotes).not.toBe(1);
        //  expect(totalVotes).toBe(-1);
          expect(totalVotes).toBe(5);

    });

})