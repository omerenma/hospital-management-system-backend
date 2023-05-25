"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnosisSchema = void 0;
const joi = require('joi');
exports.diagnosisSchema = joi.object({
    treatment_name: joi.string().required(),
    drug_administered: joi.string().required(),
    doctor_name: joi.string().required(),
    patient_email: joi.string().email().exist().required(),
    bill: joi.string().required(),
    paid: joi.string().required(),
    description: joi.string().required(),
    patient_status: joi.string().required(),
    date: joi.string().required()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc2lzVmFsbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFnbm9zaXNWYWxsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDYixRQUFBLGVBQWUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUNyQztJQUNJLGNBQWMsRUFBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3RDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDMUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDcEMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDckQsSUFBSSxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDNUIsSUFBSSxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDNUIsV0FBVyxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbkMsY0FBYyxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDdEMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDL0IsQ0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgam9pID0gcmVxdWlyZSgnam9pJylcclxuZXhwb3J0IGNvbnN0IGRpYWdub3Npc1NjaGVtYSA9IGpvaS5vYmplY3QoXHJcbiAgICB7XHJcbiAgICAgICAgdHJlYXRtZW50X25hbWU6am9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgZHJ1Z19hZG1pbmlzdGVyZWQ6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGRvY3Rvcl9uYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICBwYXRpZW50X2VtYWlsOmpvaS5zdHJpbmcoKS5lbWFpbCgpLmV4aXN0KCkucmVxdWlyZWQoKSxcclxuICAgICAgICBiaWxsOmpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIHBhaWQ6am9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgZGVzY3JpcHRpb246am9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgcGF0aWVudF9zdGF0dXM6am9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgZGF0ZTpqb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxyXG4gICAgfVxyXG4pXHJcblxyXG4iXX0=