class Company{
    constructor(id, email, imageId,address,postCode,vendorDetail,companyId,companyName,tel){
        this.id = id;
        this.email = email;
        this.imageId = imageId;
        this.address = address;
        this.postCode = postCode;
        this.vendorDetail = vendorDetail;
        this.companyId = companyId;
        this.companyName = companyName;
        this.tel = tel;
    }
}

module.exports = Company;