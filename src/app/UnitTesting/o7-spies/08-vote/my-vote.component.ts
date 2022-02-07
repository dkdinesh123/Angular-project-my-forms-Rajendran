import  {Component,EventEmitter,Input,OnInit, Output} from "@angular/core";

@Component
({
selector:'app-my-vote',
templateUrl:'./my-vote.component.html',
styleUrls:['./my-vote.component.css']
})

export class MyVoteComponent implements OnInit
{
@Input() otherVote = 0;
@Input() myVote = 0;
@Output() vote = new EventEmitter<{cVote:number}>();

    constructor()
    {

    }
    ngOnInit():void
    {

    }
    upVote()
    {
        if(this.myVote === 1)
        {
            return;
        }
        this.myVote++;
        this.vote.emit({cVote: this.myVote});
    }
    downVote()
    {
        if(this.myVote<0)
        {
            return ;
        }
        this.myVote--;
        this.vote.emit({cVote:this.myVote});
    }

    get totalVotes():number
    {
        return this.otherVote+ this.myVote;
    }
    
}