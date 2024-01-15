import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryCreateOrConnectWithoutRelationshipInputObjectSchema =
  Schema;
