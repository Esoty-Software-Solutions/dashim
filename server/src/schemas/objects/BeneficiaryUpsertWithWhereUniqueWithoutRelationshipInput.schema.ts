import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutRelationshipInputObjectSchema } from './BeneficiaryUpdateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedUpdateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutRelationshipInput.schema';
import { BeneficiaryCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryCreateWithoutRelationshipInput.schema';
import { BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficiaryUpdateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedUpdateWithoutRelationshipInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BeneficiaryCreateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () => BeneficiaryUncheckedCreateWithoutRelationshipInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficiaryUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema =
  Schema;
