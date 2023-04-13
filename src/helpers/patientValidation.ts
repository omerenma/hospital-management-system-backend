import joi from 'joi'
export const patientSchema = joi.object(
    {
        name:joi.string().required().min(6),
        email:joi.string().required().email(),
        residential_address: joi.string().required(),
        room_admitted: joi.string().required(),
        admission_no:joi.string().required(),
        id_no:joi.string().required(),
        phone_no:joi.string().required(),
        next_of_kin_name:joi.string().required(),
        next_of_kin_phone_no:joi.string().required(),
        status:joi.string().required(),
    }
)

