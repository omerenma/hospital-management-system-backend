import joi from 'joi'
export const patientSchema = joi.object(
    {
        name:joi.string().required().min(6),
        residential_address: joi.string().email().exist().required(),
        room_admitted: joi.string().email().exist().required(),
        admission_no:joi.string().email().exist().required(),
        id_no:joi.string().email().exist().required(),
        phone_number:joi.string().email().exist().required(),
        next_of_kin_name:joi.string().email().exist().required(),
        next_of_kin_phone_no:joi.string().email().exist().required(),
        status:joi.string().email().exist().required(),
    }
)

