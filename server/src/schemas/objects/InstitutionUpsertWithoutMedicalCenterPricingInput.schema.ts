import { z } from 'zod';
import { InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUpdateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedUpdateWithoutMedicalCenterPricingInput.schema';
import { InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedCreateWithoutMedicalCenterPricingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpsertWithoutMedicalCenterPricingInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => InstitutionUpdateWithoutMedicalCenterPricingInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionUncheckedUpdateWithoutMedicalCenterPricingInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema,
        ),
        z.lazy(
          () =>
            InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionUpsertWithoutMedicalCenterPricingInputObjectSchema =
  Schema;
