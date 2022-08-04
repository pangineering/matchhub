class Projects{
    constructor(id,projectId,projectName,ownerId,personId,ownerName,status,person,budget,projectDes,projectReq){
        this.id = id;
        this.projectId = projectId;
        this.projectName = projectName
        this.projectDes = projectDes;
        this.projectReq = projectReq; 
        this.ownerName = ownerName;
        this.ownerId = ownerId;
        this.person = person;
        this.personId = personId;
        this.budget = budget
        this.status = status;

    }
}

module.exports = Projects;