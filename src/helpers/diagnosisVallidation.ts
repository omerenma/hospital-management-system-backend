import joi from 'joi'
export const diagnosisSchema = joi.object(
    {
        treatment_name:joi.string().required().min(6),
        drug_administered: joi.string().email().exist().required(),
        doctor_name: joi.string().email().exist().required(),
        doctor_email:joi.string().email().exist().required(),
        patient_email:joi.string().email().exist().required(),
        bill:joi.string().email().exist().required(),
        paid:joi.string().email().exist().required(),
        description:joi.string().email().exist().required(),
        patient_status:joi.string().email().exist().required(),
        date:joi.string().required()
    }
)

