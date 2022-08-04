class Bids{
    constructor(id, bidId, projectId,startDate,endDate,status,bidder){
        this.id = id;
        this.bidId = bidId;
        this.projectId = projectId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.bidder = bidder
    }
}

module.exports = Bids;