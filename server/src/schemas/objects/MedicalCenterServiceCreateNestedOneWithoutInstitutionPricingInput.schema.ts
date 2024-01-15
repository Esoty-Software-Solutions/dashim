import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateNestedOneWithoutInstitutionPricingInput> =
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
      connect: z
        .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterServiceCreateNestedOneWithoutInstitutionPricingInputObjectSchema =
  Schema;
