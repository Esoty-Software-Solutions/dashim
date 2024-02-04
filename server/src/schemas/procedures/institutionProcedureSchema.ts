import { z } from 'zod';
const beneficiarySchema = z
.object({
  id: z.string(),
  firstName: z.string(),
  secondName: z.string().optional().nullable(),
  thirdName: z.string().optional().nullable(),
  fourthName: z.string().optional().nullable(),
  lastName: z.string(),
  birthDate: z.coerce.date(),
  genderId: z.string(),
  nationality: z.string().optional().nullable(),
  nationalID: z.string().optional().nullable(),
  residence: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  relationshipId: z.string(),
})
.strict();

const CreateBeneficiariesSchema = z
.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  // StatusSetBy:  ,
  insurancePolicyId: z.string(),
  beneficiaries: z.array(beneficiarySchema),
}).strict();


  
export  {
  beneficiarySchema,
  CreateBeneficiariesSchema
}