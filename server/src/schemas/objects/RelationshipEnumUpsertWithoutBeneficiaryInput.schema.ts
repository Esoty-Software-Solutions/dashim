import { z } from 'zod';
import { RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumUpsertWithoutBeneficiaryInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RelationshipEnumUpsertWithoutBeneficiaryInputObjectSchema = Schema;
