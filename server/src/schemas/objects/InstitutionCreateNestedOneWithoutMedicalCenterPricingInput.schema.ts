import { z } from 'zod';
import { InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionUncheckedCreateWithoutMedicalCenterPricingInput.schema';
import { InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema } from './InstitutionCreateOrConnectWithoutMedicalCenterPricingInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionCreateNestedOneWithoutMedicalCenterPricingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => InstitutionCreateWithoutMedicalCenterPricingInputObjectSchema,
          ),
          z.lazy(
            () =>
              InstitutionUncheckedCreateWithoutMedicalCenterPricingInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InstitutionCreateOrConnectWithoutMedicalCenterPricingInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const InstitutionCreateNestedOneWithoutMedicalCenterPricingInputObjectSchema =
  Schema;
