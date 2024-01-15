import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUpsertWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUpsertWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUpdateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpdateOneRequiredWithoutInstitutionPricingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceCreateWithoutInstitutionPricingInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            MedicalCenterServiceUpsertWithoutInstitutionPricingInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpdateWithoutInstitutionPricingInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceUncheckedUpdateWithoutInstitutionPricingInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceUpdateOneRequiredWithoutInstitutionPricingNestedInputObjectSchema =
  Schema;
