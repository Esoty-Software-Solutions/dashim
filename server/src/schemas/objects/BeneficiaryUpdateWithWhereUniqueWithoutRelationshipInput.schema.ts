import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutRelationshipInputObjectSchema } from './BeneficiaryUpdateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedUpdateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedUpdateWithoutRelationshipInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema =
  Schema;
