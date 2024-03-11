import { z } from 'zod';
import { RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumCreateOrConnectWithoutBeneficiaryInput.schema';
import { RelationshipEnumUpsertWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpsertWithoutBeneficiaryInput.schema';
import { RelationshipEnumWhereUniqueInputObjectSchema } from './RelationshipEnumWhereUniqueInput.schema';
import { RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUpdateWithoutBeneficiaryInput.schema';
import { RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './RelationshipEnumUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => RelationshipEnumCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z.lazy(
            () =>
              RelationshipEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            RelationshipEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => RelationshipEnumUpsertWithoutBeneficiaryInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => RelationshipEnumWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RelationshipEnumUpdateWithoutBeneficiaryInputObjectSchema,
          ),
          z.lazy(
            () =>
              RelationshipEnumUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RelationshipEnumUpdateOneRequiredWithoutBeneficiaryNestedInputObjectSchema =
  Schema;
