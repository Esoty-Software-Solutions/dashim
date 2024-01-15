import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceCreateWithoutInstitutionPricingInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutInstitutionPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
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

export const MedicalCenterServiceCreateOrConnectWithoutInstitutionPricingInputObjectSchema =
  Schema;
