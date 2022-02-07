
export class VoterComponent 
{
    totalVotes = 0;
    upVote():number
    {
       return this.totalVotes++;
    }
    downVote():number
    {
        return  this.totalVotes--;
    }
}