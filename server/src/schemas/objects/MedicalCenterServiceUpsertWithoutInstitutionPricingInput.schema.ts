import { z } from 'zod';
import { MedicalCenterServiceUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUpdateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpsertWithoutInstitutionPricingInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceUpdateWithoutInstitutionPricingInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceCreateWithoutInstitutionPricingInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceUpsertWithoutInstitutionPricingInputObjectSchema =
  Schema;
