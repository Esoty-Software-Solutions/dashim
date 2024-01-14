import { z } from 'zod';
import { RelationshipUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipUpdateWithoutBeneficiaryInput.schema';
import { RelationshipUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipUncheckedUpdateWithoutBeneficiaryInput.schema';
import { RelationshipCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipCreateWithoutBeneficiaryInput.schema';
import { RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUpsertWithoutBeneficiaryInput> = z
  .object({
    update: z.union([
      z.lazy(() => RelationshipUpdateWithoutBeneficiaryInputObjectSchema),
      z.lazy(
        () => RelationshipUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => RelationshipCreateWithoutBeneficiaryInputObjectSchema),
      z.lazy(
        () => RelationshipUncheckedCreateWithoutBeneficiaryInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const RelationshipUpsertWithoutBeneficiaryInputObjectSchema = Schema;
