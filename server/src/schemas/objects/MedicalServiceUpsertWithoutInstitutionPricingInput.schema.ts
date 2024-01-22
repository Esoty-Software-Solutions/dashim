import { z } from 'zod';
import { MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUpdateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutInstitutionPricingInput.schema';
import { MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpsertWithoutInstitutionPricingInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalServiceUpdateWithoutInstitutionPricingInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalServiceCreateWithoutInstitutionPricingInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpsertWithoutInstitutionPricingInputObjectSchema =
  Schema;
