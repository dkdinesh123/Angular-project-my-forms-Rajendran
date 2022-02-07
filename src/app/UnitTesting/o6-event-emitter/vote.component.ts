import { EventEmitter } from "@angular/core";

export class VoteComponent
{
    totalVotes = 6;
    voteChanged = new EventEmitter();
    upVote(): void
    {
        this.totalVotes++;
        this.voteChanged.emit(this.totalVotes);
    }
    downVote(): void
    {
        this.totalVotes--;
        this.voteChanged.emit(this.totalVotes);
    }
}